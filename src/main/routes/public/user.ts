import { Router } from "express";
import { validationMiddlewareAdapter, routeAdapter } from "@/main/adapters";
import { userLoginValidation } from "@/validations/usecases";
import { middlewareAdapter } from "@/main/adapters/middleware-adapter";
import { makeGetUserByCredentialsMiddleware } from "@/main/factories/middlewares/make-get-user-by-credentials-middleware";
import { makeGenerateUserTokenController } from "@/main/factories/controllers/make-generate-user-token-controller";


export default (routes: Router) => {

    routes.post(
      '/users/login',
      validationMiddlewareAdapter(userLoginValidation),
      middlewareAdapter(makeGetUserByCredentialsMiddleware()),
      routeAdapter(makeGenerateUserTokenController()),
    )
}