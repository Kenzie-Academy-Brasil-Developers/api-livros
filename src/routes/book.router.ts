import { Router } from "express"
import { BooksControllers } from "../controllers/books.controlers"
import { BookMiddlewares } from "../middlewares/books.middlewares"

export const booksRouter = Router()

const bookMiddlewares = new BookMiddlewares()
const bookControllers = new BooksControllers()


booksRouter.post("/",bookMiddlewares.verifybookRegister,bookControllers.createBook )

booksRouter.get("/",bookControllers.getBooks)

booksRouter.get("/:id",bookMiddlewares.isBookIdValid,bookControllers.getOneBook ) 

booksRouter.patch("/:id",bookMiddlewares.isBookIdValid, bookMiddlewares.verifybookRegister,bookControllers.updatedBook)

booksRouter.delete("/:id",bookMiddlewares.isBookIdValid,bookControllers.deleteBook )