import { Request, Response } from "express";
import { BooksServices } from "../services/books.services";

export class BooksControllers {

    private booksService = new BooksServices()

    createBook = (req: Request, res: Response): Response => {

        const newBook = this.booksService.createBook( req.body)

        return res.status(201).json(newBook)
    }

    getBooks = (req: Request, res: Response): Response => {
        const nameBook = req.query.search as string | undefined

        const allBook = this.booksService.getBooks(nameBook)

        return res.status(200).json(allBook)
    }

    getOneBook = (req: Request, res: Response): Response => {

        const book = this.booksService.getOneBook(req.params.id)

        return res.status(200).json(book)
    }

    updatedBook = (req: Request, res: Response): Response => {

        const bookUpdate = this.booksService.updatedBook(req.params.id, req.body)

        return res.status(200).json(bookUpdate)
    }

    deleteBook = (req: Request, res: Response): Response => {

        const bookDelete = this.booksService.deleteBook(req.params.id)

        return res.status(204).json(bookDelete)
    }
}
