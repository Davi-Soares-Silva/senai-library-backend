import { adaptRoute } from "@/main/adapters/adapt-route";
import { makeExampleController } from "@/main/factories/make-example-controller";
import { Router } from "express";

export default (routes: Router) => {
  routes.get(
    '/examples',
    adaptRoute(makeExampleController())
  )
}