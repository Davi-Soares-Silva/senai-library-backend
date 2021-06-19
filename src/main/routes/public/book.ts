import { adaptRoute } from "@/main/adapters/adapt-route";
import { makeCreateBookController } from "@/main/factories/make-example-controller";
import { Router } from "express";

export default (routes: Router) => {
  routes.post(
    '/books',
    adaptRoute(makeCreateBookController())
  )
}