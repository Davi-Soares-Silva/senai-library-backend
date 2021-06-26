import { ListBooks } from "@/domain/usecases/list-books";
import { ListBooksRepository } from "../protocols/db/list-books-repository";

export class DbListBooks implements ListBooks {
  constructor (
    private readonly listBooks: ListBooksRepository
  ) {}

  async findAll(): ListBooks.Result {
    const books = await this.listBooks.findAll();

    return books;
  }
}