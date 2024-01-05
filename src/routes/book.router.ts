import { Router } from "express"
import { BooksControllers } from "../controllers/books.controlers"
import { BookMiddlewares } from "../middlewares/books.middlewares"
import { GlobalErrors } from "../middlewares/errors.middleware"
import { bookCreateSchema, bookUpdateSchema, querySchema } from "../schemas/books.schemas"

export const booksRouter = Router()

const bookMiddlewares = new BookMiddlewares()
const bookControllers = new BooksControllers()
const globalErrors = new GlobalErrors()


booksRouter.post("/",
globalErrors.validateBody({body: bookCreateSchema}),
bookMiddlewares.verifybookRegister,
bookControllers.createBook )

booksRouter.get("/",
globalErrors.validateBody({query: querySchema}),
bookControllers.getBooks)

booksRouter.get("/:id",
bookMiddlewares.isBookIdValid,
bookControllers.getOneBook ) 

booksRouter.patch("/:id",
globalErrors.validateBody({body: bookUpdateSchema}),
bookMiddlewares.isBookIdValid, 
bookMiddlewares.verifybookRegister,
bookControllers.updatedBook)

booksRouter.delete("/:id",
bookMiddlewares.isBookIdValid,
bookControllers.deleteBook )