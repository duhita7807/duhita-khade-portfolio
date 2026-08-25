import mongoose from "mongoose";

export const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode && res.statusCode !== 200 ? res.statusCode : 500;
  let message = err.message || "Something went wrong.";

  if (err.name === "ValidationError") {
    statusCode = 400;
    message = Object.values(err.errors)
      .map((item) => item.message)
      .join(" ");
  }

  if (err instanceof mongoose.Error.CastError) {
    statusCode = 400;
    message = "Invalid request data.";
  }

  res.status(statusCode).json({
    success: false,
    message,
  });
};
