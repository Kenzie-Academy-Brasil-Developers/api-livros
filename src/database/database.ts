import { IBook } from "../interface/books.interface"

export const booksDatabase: IBook[] = []

let id = 0

export const generateId = () => {
    id++
    return id
}