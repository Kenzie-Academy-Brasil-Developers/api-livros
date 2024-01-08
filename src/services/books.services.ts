import { booksDatabase, generateId } from "../database/database"
import {  TBook, TCreateBook, TUpdateBook } from "../interface/books.interface"

export class BooksServices {

    createBook = (data: TCreateBook): TBook => {

        const newBook: TBook = {
            id: generateId(),
            ...data,
            createdAt: new Date(),
            updatedAt: new Date()
        }

        booksDatabase.push(newBook)

        return newBook
    }

    getBooks = (query: string | undefined) => {

        if(query){
          return booksDatabase.filter((book) => book.name === query)
        }else{
            return booksDatabase
        }
    }

    getOneBook = (id: string) => {
       const book = booksDatabase.find(book => book.id === Number(id))

       return book
    }

    updatedBook = (id: string, data: TUpdateBook): TBook => {

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