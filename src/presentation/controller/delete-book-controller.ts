import { DeleteBook } from "@/domain/usecases/delete-book";
import { ok, serverError } from "@/utils/response";
import { Controller, HttpRequest, HttpResponse } from "../protocols";

export class DeleteBookController implements Controller {
  constructor (private readonly deleteBook: DeleteBook) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params;

      await this.deleteBook.delete(id);

      return ok('Livro deletado com sucesso!', {});
    } catch(error) {
      switch(error.message) {
        default:
          return serverError(error);
      }
    }
  }
}