import express, { json } from "express"
import { booksRouter } from "./routes/book.router"
import { HandleErrors } from "./middlewares/errors.middleware"
import helmet from "helmet"

export const app = express()

const handleErrors = new HandleErrors()

app.use(helmet())

app.use(json())

app.use("/books", booksRouter)

app.use(handleErrors.execute)
