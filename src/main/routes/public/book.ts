import { adaptRoute } from "@/main/adapters/adapt-route";
import { makeCreateBookController, makeListBooksController } from "@/main/factories/controllers";
import { Router } from "express";

export default (routes: Router) => {
  routes.route('/books')
    .post(adaptRoute(makeCreateBookController()))
    .get(adaptRoute(makeListBooksController()))
}