import { adaptRoute } from "@/main/adapters/adapt-route";
import { makeCreateBookController, makeListBooksController } from "@/main/factories/controllers";
import { makeDeleteBookController } from "@/main/factories/controllers/make-delete-book-controller";
import { Router } from "express";

export default (routes: Router) => {
  routes.route('/books')
    .post(adaptRoute(makeCreateBookController()))
    .get(adaptRoute(makeListBooksController()))

  routes.route('/books/:id')
    .delete(adaptRoute(makeDeleteBookController()))
}