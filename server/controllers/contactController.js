import mongoose from "mongoose";
import Contact from "../models/Contact.js";
import { sendContactEmail } from "../utils/mailer.js";

export const createContact = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    let contactId = null;
    let emailSent = false;

    if (mongoose.connection.readyState === 1) {
      try {
        const contact = await Contact.create({ name, email, subject, message });
        contactId = contact._id;
      } catch (error) {
        console.error("Failed to save contact submission:", error.message);
      }
    } else {
      console.warn("Database is not connected. Skipping save, will still attempt to send the email.");
    }

    try {
      const result = await sendContactEmail({ name, email, subject, message });
      emailSent = result.sent;
    } catch (error) {
      console.error("Failed to send contact email notification:", error.message);
    }

    // Only fail the request if the message could neither be stored nor emailed.
    if (!contactId && !emailSent) {
      res.status(503);
      throw new Error("Unable to send your message right now. Please try again later.");
    }

    res.status(201).json({
      success: true,
      message: "Thank you. Your message has been sent successfully.",
      data: {
        id: contactId,
      },
    });
  } catch (error) {
    next(error);
  }
};
