import { CreateBook } from "@/domain/usecases/book/create-book";
import { CreateBookRepository } from '../../protocols/db/book/create-book-repository';

export class DbCreateBook implements CreateBook {
  constructor(
    private readonly createBook: CreateBookRepository
  ) { }

  async create(params: CreateBook.Params): CreateBook.Result {
    console.log(params);

    const book = await this.createBook.create(params);

    if(!book) throw new Error('BOOK_CREATION_ERROR');

    return book;
  }
}