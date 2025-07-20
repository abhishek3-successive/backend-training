// middlewares/dynamicValidate.ts
import { Request, Response, NextFunction } from 'express';
import Joi, { ObjectSchema } from 'joi';
import validationRules from '../config/validationRules.json';

type ValidationRules = {
  [route: string]: {
    body?: {
      [field: string]: any;
    };
    query?: {
      [field: string]: any;
    };
  };
};

const dynamicValidate = () => {
  return (req: Request, res: Response, next: NextFunction) => {
    const route = req.route?.path;
    if (!route) return next();

    const rules = (validationRules as ValidationRules)[route];
    if (!rules) return next();

    let schema: { body?: ObjectSchema; query?: ObjectSchema } = {};

    if (rules.body) {
      schema.body = convertToJoiSchema(rules.body);
    }

    if (rules.query) {
      schema.query = convertToJoiSchema(rules.query);
    }

    const validationOptions = {
      abortEarly: false,
      allowUnknown: true,
      stripUnknown: true
    };

    if (schema.body) {
      const { error, value } = schema.body.validate(req.body, validationOptions);
      if (error) {
        const errorMessages = error.details.map(detail => detail.message);
        return res.status(400).json({ errors: errorMessages });
      }
      req.body = value;
    }

    if (schema.query) {
      const { error, value } = schema.query.validate(req.query, validationOptions);
      if (error) {
        const errorMessages = error.details.map(detail => detail.message);
        return res.status(400).json({ errors: errorMessages });
      }
      req.query = value;
    }

    next();
  };
};

const convertToJoiSchema = (fields: { [key: string]: any }): ObjectSchema => {
  const joiSchemaFields: { [key: string]: any } = {};

  for (const [field, rules] of Object.entries(fields)) {
    let joiField: Joi.StringSchema | Joi.NumberSchema = Joi.any();

    switch (rules.type) {
      case 'string':
        joiField = Joi.string();
        if (rules.alphanum) joiField = joiField.alphanum();
        if (rules.email) joiField = joiField.email();
        if (rules.min) joiField = joiField.min(rules.min);
        if (rules.max) joiField = joiField.max(rules.max);
        if (rules.pattern) joiField = joiField.pattern(new RegExp(rules.pattern));
        break;
      case 'number':
        joiField = Joi.number();
        if (rules.integer) joiField = joiField.integer();
        if (rules.positive) joiField = joiField.positive();
        break;
      // Add more types as needed
      default:
        throw new Error(`Unsupported type: ${rules.type}`);
    }

    if (rules.required) {
      joiField = joiField.required();
    } else {
      joiField = joiField.optional();
    }

    if (rules.messages) {
      joiField = joiField.messages(rules.messages);
    }

    joiSchemaFields[field] = joiField;
  }

  return Joi.object(joiSchemaFields);
};

export default dynamicValidate;