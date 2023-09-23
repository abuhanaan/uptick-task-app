const errorResponse = (
  res,
  error = "Internal Server Error",
  statusCode = 500,
  message
) => {
  return res.status(statusCode).send({
    success: false,
    error,
    message,
  });
};

module.exports = errorResponse;
