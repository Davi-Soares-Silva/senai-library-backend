import { routeAdapter } from "@/main/adapters/route-adapter";
import { makeCreateBookController, makeListBooksController, makeUpdateBookController } from "@/main/factories/controllers";
import { makeDeleteBookController } from "@/main/factories/controllers/make-delete-book-controller";
import { Router } from "express";
import { validationMiddlewareAdapter } from "@/main/adapters";
import { createBookValidation } from "@/validations/usecases";

export default (routes: Router) => {

  routes.post(
    '/books',
    validationMiddlewareAdapter(createBookValidation),
    routeAdapter(makeCreateBookController())
  )

  routes.route('/books')
    .post()
    .get(routeAdapter(makeListBooksController()))

  routes.route('/books/:id')
    .delete(routeAdapter(makeDeleteBookController()))
    .put(routeAdapter(makeUpdateBookController()))
}