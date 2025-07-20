import Joi from 'joi';

export const registerSchema = Joi.object({
  username: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required()
    .messages({
      'string.base': 'Username should be a type of text',
      'string.empty': 'Username cannot be empty',
      'string.min': 'Username must be at least 3 characters',
      'any.required': 'Username is required'
    }),
  
  email: Joi.string()
    .email()
    .required()
    .messages({
      'string.email': 'Please provide a valid email address',
      'any.required': 'Email is required'
    }),
  
  password: Joi.string()
    .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$'))
    .required()
    .messages({
      'string.pattern.base': 'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number',
      'any.required': 'Password is required'
    }),
});