class HttpError extends Error {
  constructor(message, errorCode) {
    super(message); // add message
    this.code = errorCode;
  }
}

module.exports = HttpError;
