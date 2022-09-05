import { DeleteBook } from "@/domain/usecases/book/delete-book";
import { DeleteBookRepository } from "../../protocols/db/book/delete-book-repository";

export class DbDeleteBook implements DeleteBook {
  constructor (private readonly deleteBook: DeleteBookRepository) {}

  async delete(id: number): Promise<void> {
    await this.deleteBook.delete(id);
  }
}