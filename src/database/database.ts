import { TBook } from "../interface/books.interface"

export const booksDatabase: TBook[] = []

let id = 0

export const generateId = () => {
    id++
    return id
}