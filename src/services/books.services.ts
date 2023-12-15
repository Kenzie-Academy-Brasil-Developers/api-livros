import { booksDatabase, generateId } from "../database/database"
import { IBook } from "../interface/books.interface"

export class BooksServices {

    createBook = (name: string, pages: string, category: string | undefined ): IBook => {

        const newBook: IBook = {
            id: generateId(),
            name: name,
            pages: Number(pages),
            category: category,
            createdAt: new Date(),
            updatedAt: new Date()
        }

        booksDatabase.push(newBook)

        return newBook
    }

    getBooks = (): IBook[] => {
        return booksDatabase
    }

    getOneBook = (id: string) => {
       const book = booksDatabase.find(book => book.id === Number(id))

       return book
    }

    updatedBook = (id: string, data: { name?: string | undefined, pages?: number | undefined, category?: string | undefined}): IBook => {

        const index=  booksDatabase.findIndex(book => book.id === Number(id))

        booksDatabase[index] = {
            ...booksDatabase[index],
            ...data,
            updatedAt: new Date(),
        }

        return booksDatabase[index];
    }

    deleteBook(id: string) : void{
       const index=  booksDatabase.findIndex(book => book.id === Number(id))

       booksDatabase.splice(index,1)
    }
}