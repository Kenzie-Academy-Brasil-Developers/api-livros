import { AnyZodObject, z } from "zod"
import { bookCreateSchema, bookSchema, bookUpdateSchema } from "../schemas/books.schemas"


export type TBook= z.infer<typeof bookSchema>

export type TCreateBook= z.infer<typeof bookCreateSchema>

export type TUpdateBook= z.infer<typeof bookUpdateSchema>

export interface RequestSchema {
    params?: AnyZodObject
    body?: AnyZodObject
    query?: AnyZodObject
}