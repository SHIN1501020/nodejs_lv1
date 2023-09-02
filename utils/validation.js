import { BAD_REQUEST } from "./errors/BadRequest.js";


export const validateBody = (schema) => {
    return async (req, res, next) => {
      try {
        const validatedBody = await schema.validateAsync(req.body);
        req.body = validatedBody;
        next();
      } catch (err) {
        next(err);
      }
    };
  };
  