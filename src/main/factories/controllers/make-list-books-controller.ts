import { ListBooksController } from "@/presentation/controller/list-books-controller"

export const makeListBooksController = () => {
  return new ListBooksController();
}