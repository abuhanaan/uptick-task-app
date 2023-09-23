const validateFields = (schema) => async (req, res, next) => {
  const body = req.body;

  try {
    await schema.validate(body);
    next();
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: error.name,
      message: error.message,
    });
  }
};

module.exports = validateFields;
