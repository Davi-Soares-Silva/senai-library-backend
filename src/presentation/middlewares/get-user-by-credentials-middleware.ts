import { GetUserByCredentials } from "@/domain/usecases/user";
import { makeError } from '@/utils';
import { serverError, unprocessableEntity } from "@/utils/response";
import { HttpRequest, HttpResponse } from "../protocols";
import { Middleware } from "../protocols/middleware";

export class GetUserByCredentialsMiddleware implements Middleware {
  constructor(private readonly getUser: GetUserByCredentials) { }

  async handle(
      httpRequest: HttpRequest,
      next: Function,
    ): Promise<HttpResponse | void> {
    try {


      const user = await this.getUser.get({
        ...httpRequest.body,
      });

      httpRequest.user = user;

      return next();

    } catch (error) {
      switch (error.message) {
        case 'BOOK_CREATION_ERROR':
          return unprocessableEntity(
            'Não foi possível registrar este livro!',
            makeError('book', 'Erro nas informações do livro.')
          )
        default:
          return serverError(error);
      }
    }
  }
}