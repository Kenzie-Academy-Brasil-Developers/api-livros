import express, { json } from "express"
import { booksRouter } from "./routes/book.router"
import { GlobalErrors } from "./middlewares/errors.middleware"
import helmet from "helmet"

export const app = express()

const globalErrors = new GlobalErrors()

app.use(helmet())

app.use(json())

app.use("/books", booksRouter)

app.use(globalErrors.execute)
