import { NextFunction, Request, Response } from "express"
import { AppError } from "../errors/errors"
import { RequestSchema } from "../interface/books.interface"
import { ZodError } from "zod"

export class GlobalErrors {

    execute = (err: Error, req: Request, res: Response, next: NextFunction): Response => {

        if (err instanceof AppError) {
            return res.status(err.statusCode).json({ error: err.message })
        } else if (err instanceof ZodError) {
          return res.status(409).json(err);
        }else {
            return res.status(500).json({ error: "Internal server error" })
        }
    }


    validateBody = (schemas: RequestSchema) => {
        return async (req: Request, res: Response, next: NextFunction) => {
            if (schemas.params) {
                req.params = await schemas.params.parseAsync(req.params);
            }

            if (schemas.body) {
                req.body = await schemas.body.parseAsync(req.body);
            }

            if (schemas.query && Object.keys(req.query).length) {
                req.query = await schemas.query.parseAsync(req.query);
            }

            return next();
        }
    }
}