import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodError } from "zod";

interface IRequesteSchemas {
  params?: AnyZodObject;
  body?: AnyZodObject;
  query?: AnyZodObject;
}

export class ValidateBody {
  static execute(schemas: IRequesteSchemas) {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        if (schemas.params) {
          req.params = await schemas.params.parseAsync(req.params);
        }
        if (schemas.body) {
          req.body = await schemas.body.parseAsync(req.body);
        }
        if (schemas.query) {
          req.query = await schemas.query.parseAsync(req.query);
        }
        next();
      } catch (error) {
        if (error instanceof ZodError) {
          return res.status(409).json(error);
        }
      }
    };
  }
}
