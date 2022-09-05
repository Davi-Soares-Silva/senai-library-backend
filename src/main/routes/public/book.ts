import { makeCreateBookController, makeListBooksController, makeUpdateBookController } from "@/main/factories/controllers";
import { routeAdapter } from "@/main/adapters/route-adapter";
import { makeDeleteBookController } from "@/main/factories/controllers/make-delete-book-controller";
import { Router } from "express";
import { validationMiddlewareAdapter, imageUploadAdapter } from "@/main/adapters";
import { createBookValidation } from "@/validations/usecases";

export default (routes: Router) => {

  routes.post(
    '/books',
    imageUploadAdapter(['little_image', 'image']),
    validationMiddlewareAdapter(createBookValidation),
    routeAdapter(makeCreateBookController())
  )

  routes
    .get('/books', routeAdapter(makeListBooksController()))

  routes.route('/books/:id')
    .delete(routeAdapter(makeDeleteBookController()))
    .put(routeAdapter(makeUpdateBookController()))
}