import validator from "validator";

const sanitize = (value = "") => String(value).trim();

export const validateContact = (req, res, next) => {
  const name = sanitize(req.body.name);
  const email = sanitize(req.body.email);
  const subject = sanitize(req.body.subject);
  const message = sanitize(req.body.message);
  const errors = [];

  if (!name || name.length < 2) {
    errors.push("Please enter a valid name.");
  }

  if (!email || !validator.isEmail(email)) {
    errors.push("Please enter a valid email address.");
  }

  if (!subject || subject.length < 3) {
    errors.push("Please enter a subject.");
  }

  if (!message || message.length < 10) {
    errors.push("Message should be at least 10 characters.");
  }

  if (errors.length > 0) {
    res.status(400);
    return next(new Error(errors.join(" ")));
  }

  req.body = { name, email, subject, message };
  next();
};
