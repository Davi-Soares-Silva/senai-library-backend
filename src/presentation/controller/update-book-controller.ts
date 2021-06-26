import { UpdateBook } from "@/domain/usecases/update-book";
import { ok, serverError } from "@/utils/response";
import { Controller, HttpRequest, HttpResponse } from "../protocols";

export class UpdateBookController implements Controller {
  constructor (private readonly updateBook: UpdateBook) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params;
      const { authors, ...bookWithoutAuthors } = httpRequest.body;

      await this.updateBook.update({
        id,
        authors: authors.join(','),
        ...bookWithoutAuthors
      });

      return ok('Livro atualizado com sucesso!', {});
    } catch(error) {
      console.log(error);
      switch(error.message) {
        default:
          return serverError(error);
      }
    }
  }
}