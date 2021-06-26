import { ok, serverError } from "@/utils/response";
import { Controller, HttpRequest, HttpResponse } from "../protocols";

export class ListBooksController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {

      return ok('Jogos listados com sucesso!', {})
    } catch (error) {
      switch(error.message) {
        default:
          return serverError(error);
      }
    }
  }
}