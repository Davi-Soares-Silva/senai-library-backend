import { CreateBook } from "@/domain/usecases/create-book";
import { ok, serverError, unprocessableEntity } from "@/utils/response";
import { makeError } from '@/utils';
import { Controller, HttpRequest, HttpResponse } from "../protocols";

export class CreateBookController implements Controller {
  constructor(private readonly createBook: CreateBook) { }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {

      const { authors, ...bookWithoutAuthors } = httpRequest.body

      const book = await this.createBook.create({
        ...bookWithoutAuthors,
        authors: authors.join(','),
      });

      return ok('Livro registrado com sucesso!', book);

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