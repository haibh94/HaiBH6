const Joi = require('joi');

const validateRegister = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
  });
  const { error } = schema.validate(req.body);
  if (error) return res.error(error.details[0].message, 400);
  next();
};

const validateLogin = validateRegister;

module.exports = { validateRegister, validateLogin };