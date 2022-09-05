import { DbCreateBook } from "@/data/usecases/book/db-create-book";
import { BookRepository } from "@/infra/db/mysql/book/book-repository";
import { CreateBookController } from "@/presentation/controller/create-book-controller"

export const makeCreateBookController = () => {
  const bookRepository = new BookRepository();
  const dbCreateBook = new DbCreateBook(bookRepository);

  return new CreateBookController(dbCreateBook);
}