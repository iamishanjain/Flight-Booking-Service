class AppError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
    this.explanation = message;
  }
}

module.exports = { AppError };
