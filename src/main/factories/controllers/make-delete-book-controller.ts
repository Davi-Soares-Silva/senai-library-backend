import { DbDeleteBook } from "@/data/usecases/db-delete-book";
import { BookRepository } from "@/infra/db/mysql/book/book-repository";
import { DeleteBookController } from "@/presentation/controller/delete-book-controller"

export const makeDeleteBookController = () => {
  const bookRepository = new BookRepository();

  const dbDeleteBook = new DbDeleteBook(bookRepository);

  return new DeleteBookController(dbDeleteBook);
}