import { Router } from "express"
import { BooksControllers } from "../controllers/books.controlers"
import { BookMiddlewares } from "../middlewares/books.middlewares"
import { bookCreateSchema, bookUpdateSchema, querySchema } from "../schemas/books.schemas"
import { ValidateRequest } from "../middlewares/validateRequest.middleware"

export const booksRouter = Router()

const bookMiddlewares = new BookMiddlewares()
const bookControllers = new BooksControllers()
const validateRequest = new ValidateRequest()


booksRouter.post("/",
validateRequest.execute({body: bookCreateSchema}),
bookMiddlewares.verifybookRegister,
bookControllers.createBook )

booksRouter.get("/",
validateRequest.execute({query: querySchema}),
bookControllers.getBooks)

booksRouter.get("/:id",
bookMiddlewares.isBookIdValid,
bookControllers.getOneBook ) 

booksRouter.patch("/:id",
validateRequest.execute({body: bookUpdateSchema}),
bookMiddlewares.isBookIdValid, 
bookMiddlewares.verifybookRegister,
bookControllers.updatedBook)

booksRouter.delete("/:id",
bookMiddlewares.isBookIdValid,
bookControllers.deleteBook )