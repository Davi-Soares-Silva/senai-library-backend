import { ListBooks } from "@/domain/usecases/list-books";
import { ok, serverError } from "@/utils/response";
import { Controller, HttpRequest, HttpResponse } from "../protocols";

export class ListBooksController implements Controller {
  constructor (
    private readonly listBooks: ListBooks
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const books = await this.listBooks.findAll();
      return ok('Livros listados com sucesso!', books)
    } catch (error) {
      switch(error.message) {
        default:
          return serverError(error);
      }
    }
  }
}