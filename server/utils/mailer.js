import nodemailer from "nodemailer";
import validator from "validator";

let cachedTransporter = null;

const isEmailConfigured = () =>
  Boolean(process.env.EMAIL_USER && process.env.EMAIL_PASSWORD && process.env.CONTACT_RECEIVER);

const getTransporter = () => {
  if (cachedTransporter) return cachedTransporter;

  cachedTransporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
  });

  return cachedTransporter;
};

/**
 * Sends a contact-form notification email.
 * Silently no-ops (with a console warning) if email env vars are not configured,
 * so the contact form still works (saving to the DB) even before email is set up.
 */
export const sendContactEmail = async ({ name, email, subject, message }) => {
  if (!isEmailConfigured()) {
    console.warn(
      "Email not sent: EMAIL_USER, EMAIL_PASSWORD, or CONTACT_RECEIVER is missing from server/.env"
    );
    return { sent: false };
  }

  const transporter = getTransporter();
  // Visitor input goes into HTML, so escape it to stop markup/link injection into the inbox.
  const safe = Object.fromEntries(
    Object.entries({ name, email, subject, message }).map(([key, value]) => [key, validator.escape(value)])
  );

  await transporter.sendMail({
    from: `"${name.replace(/"/g, "")} via Portfolio" <${process.env.EMAIL_USER}>`,
    to: process.env.CONTACT_RECEIVER,
    replyTo: email,
    subject: `[Portfolio] ${subject}`,
    text: `You have a new message from your portfolio contact form.\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
    html: `
      <div style="background:#f1f5f9;padding:32px 16px;font-family:Segoe UI,Roboto,Arial,sans-serif;">
        <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 8px 24px rgba(15,23,42,.08);">
          <div style="background:linear-gradient(135deg,#2563eb,#06b6d4,#9333ea);background-color:#2563eb;padding:28px 32px;color:#ffffff;">
            <p style="margin:0;font-size:12px;letter-spacing:2px;text-transform:uppercase;opacity:.85;">Portfolio Contact</p>
            <h1 style="margin:8px 0 0;font-size:22px;">New message from ${safe.name}</h1>
          </div>
          <div style="padding:28px 32px;color:#334155;font-size:15px;line-height:1.6;">
            <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
              <tr><td style="padding:6px 0;color:#94a3b8;width:90px;">Name</td><td style="padding:6px 0;font-weight:600;">${safe.name}</td></tr>
              <tr><td style="padding:6px 0;color:#94a3b8;">Email</td><td style="padding:6px 0;"><a href="mailto:${safe.email}" style="color:#2563eb;">${safe.email}</a></td></tr>
              <tr><td style="padding:6px 0;color:#94a3b8;">Subject</td><td style="padding:6px 0;font-weight:600;">${safe.subject}</td></tr>
            </table>
            <div style="background:#f8fafc;border-left:4px solid #2563eb;border-radius:8px;padding:16px 20px;white-space:pre-wrap;">${safe.message}</div>
            <a href="mailto:${safe.email}?subject=${encodeURIComponent(`Re: ${subject}`)}" style="display:inline-block;margin-top:24px;background:#2563eb;color:#ffffff;text-decoration:none;padding:12px 22px;border-radius:10px;font-weight:600;">Reply to ${safe.name}</a>
          </div>
          <p style="margin:0;padding:16px 32px;background:#f8fafc;color:#94a3b8;font-size:12px;">Sent from the contact form on your portfolio website.</p>
        </div>
      </div>
    `,
  });

  return { sent: true };
};
