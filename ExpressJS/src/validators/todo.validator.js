const Joi = require('joi');

const validateTodo = (req, res, next) => {
  const schema = Joi.object({
    content: Joi.string().min(1).required(),
    completed: Joi.boolean().optional()
  });
  const { error } = schema.validate(req.body);
  if (error) return res.error(error.details[0].message, 400);
  next();
};

module.exports = { validateTodo };