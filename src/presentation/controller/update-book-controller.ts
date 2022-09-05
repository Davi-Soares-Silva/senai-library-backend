import { UpdateBook } from "@/domain/usecases/book/update-book";
import { ok, serverError } from "@/utils/response";
import { Controller, HttpRequest, HttpResponse } from "../protocols";

export class UpdateBookController implements Controller {
  constructor (private readonly updateBook: UpdateBook) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params;

      await this.updateBook.update({
        id,
        ...httpRequest.body
      });

      return ok('Livro atualizado com sucesso!', {});
    } catch(error) {
      switch(error.message) {
        default:
          return serverError(error);
      }
    }
  }
}