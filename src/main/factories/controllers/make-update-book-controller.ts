import { DbUpdateBook } from "@/data/usecases/db-update-book";
import { BookRepository } from "@/infra/db/mysql/book/book-repository";
import { UpdateBookController } from "@/presentation/controller/update-book-controller"

export const makeUpdateBookController = () => {
  const bookRepository = new BookRepository();
  const dbUpdateBook = new DbUpdateBook(bookRepository);

  return new UpdateBookController(dbUpdateBook);
}