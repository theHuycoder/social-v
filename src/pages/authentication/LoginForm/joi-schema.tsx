import Joi from 'joi';

export const joiSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: false })
    .required()
    .messages({
      'string.email': 'Email is invalid',
      'string.empty': 'Email is required',
      'string.required': 'Email is required',
    }),
  password: Joi.string()
    .min(8)
    .required()
    .messages({
      'string.min': 'Password length must be at least 8',
      'string.empty': 'Password is required',
      'string.required': 'Password is required',
    })
  ,
});