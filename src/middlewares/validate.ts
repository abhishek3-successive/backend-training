import { Request, Response, NextFunction } from 'express';
import Joi, { ObjectSchema } from 'joi';

const validate = (schema: ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const validationOptions = {
      abortEarly: false,
      allowUnknown: true,
      stripUnknown: true
    };

    const { error, value } = schema.validate(req.body, validationOptions);

    if (error) {
      const errorMessages = error.details.map(detail => detail.message);
      return res.status(400).json({ errors: errorMessages });
    }

    req.body = value;
    next();
  };
};

export default validate;