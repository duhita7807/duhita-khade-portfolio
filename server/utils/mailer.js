import nodemailer from "nodemailer";

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

  await transporter.sendMail({
    from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
    to: process.env.CONTACT_RECEIVER,
    replyTo: email,
    subject: `[Portfolio] ${subject}`,
    text: `You have a new message from your portfolio contact form.\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
    html: `
      <div style="font-family: sans-serif; line-height: 1.6;">
        <h2>New portfolio contact message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      </div>
    `,
  });

  return { sent: true };
};
