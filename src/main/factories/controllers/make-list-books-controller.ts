import { DbListBooks } from "@/data/usecases/book/db-list-books";
import { BookRepository } from "@/infra/db/mysql/book/book-repository";
import { ListBooksController } from "@/presentation/controller/list-books-controller"

export const makeListBooksController = () => {
  const bookRepository = new BookRepository();
  const dbListBooks = new DbListBooks(bookRepository);

  return new ListBooksController(dbListBooks);
}