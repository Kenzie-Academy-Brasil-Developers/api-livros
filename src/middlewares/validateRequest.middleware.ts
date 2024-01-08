import { NextFunction, Request, Response } from "express"
import { RequestSchema } from "../interface/books.interface"
import { ZodError } from "zod"

export class ValidateRequest {
    execute = (schema: RequestSchema) => {

        return async (req: Request, res: Response, next: NextFunction) => {
            try {
                if (schema.params) {
                    req.params = await schema.params?.parseAsync(req.params)
                }

                if (schema.body) {
                    req.body = await schema.body?.parseAsync(req.body)
                }

                if (schema.query && Object.keys(req.query).length) {
                    req.query = await schema.query?.parseAsync(req.query)
                }

                return next();
            } catch (error) {
                if (error instanceof ZodError) {
                    return res.status(409).json(error)
                }

            }

        }
    }
}