import Joi from 'joi';

export const joiSchema = Joi.object({
  username: Joi.string()
    .required()
    .messages({
      'string.empty': 'Username is required',
      'string.required': 'Username is required',
    }),
  email: Joi.string()
    .email({ tlds: false })
    .required()
    .messages({
      'string.email': 'Email is invalid',
      'string.empty': 'Email is required',
      'string.required': 'Email is required',
    }),
  password: Joi.string()
    .min(1)
    .required()
    .messages({
      'string.min': 'Password length must be at least 8',
      'string.empty': 'Password is required',
      'string.required': 'Password is required',
    }),
  confirm_password: Joi.any()
    .valid(Joi.ref('password'))
    .required()
    .messages({
      'any.only': 'Confirm Password does not match',
      'any.empty': 'Confirm Password is required',
      'any.required': 'Confirm Password is required',
    }),
  first_name: Joi.string()
    .required()
    .messages({
      'string.empty': 'First name is required',
      'string.required': 'First name is required',
    }),
  last_name: Joi.string()
    .required()
    .messages({
      'string.empty': 'First name is required',
      'string.required': 'First name is required',
    }),
  gender: Joi.string()
    .valid('male', 'female', 'other')
    .required()
    .messages({
      'string.empty': 'Gender is required',
      'string.required': 'Gender is required',
      'string.valid': 'Gender is required',
    }),
});