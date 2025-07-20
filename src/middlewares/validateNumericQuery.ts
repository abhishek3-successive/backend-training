import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const validateNumericQuery = (queryParams: string[]) => {
  const schemaFields: { [key: string]: Joi.NumberSchema } = {};

  queryParams.forEach(param => {
    schemaFields[param] = Joi.number()
      .integer()
      .positive()
      .required()
      .messages({
        'number.base': `${param} must be a number`,
        'number.integer': `${param} must be an integer`,
        'number.positive': `${param} must be a positive number`,
        'any.required': `${param} is required`
      });
  });

  const schema = Joi.object(schemaFields);

  return (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = schema.validate(req.query);

    if (error) {
      const errorMessages = error.details.map(detail => detail.message);
      return res.status(400).json({ errors: errorMessages });
    }

    req.query = value;
    next();
  };
};

export default validateNumericQuery;