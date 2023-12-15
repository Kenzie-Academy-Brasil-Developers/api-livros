import { NextFunction, Request, Response } from "express"
import { booksDatabase } from "../database/database"
import { AppError } from "../errors/errors"

export class BookMiddlewares{

    isBookIdValid = (req: Request, res: Response, next: NextFunction) => {
        if(!booksDatabase.find(book => book.id === Number(req.params.id))){
           throw new AppError(404, "Book not found.")
        }
        next()
    }

    verifybookRegister =  (req: Request, res: Response, next: NextFunction)  => {
      
        if(booksDatabase.some(book => book.name === req.body.name )){
            throw new AppError(409, "Book already registered.")
        }

        next()
    }
}