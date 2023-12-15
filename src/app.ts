import express, { json } from "express"
import { booksRouter } from "./routes/book.router"
import { GlobalErrors } from "./middlewares/errors.middleware"

export const app = express()
const globalErrors = new GlobalErrors()

app.use(json())

app.use("/books", booksRouter)

app.use(globalErrors.execute)
