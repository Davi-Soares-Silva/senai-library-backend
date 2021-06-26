import { CreateBookRepository } from "@/data/protocols/db/create-book-repository";
import { ListBooksRepository } from "@/data/protocols/db/list-books-repository";
import { formateCamelCaseKeysForSnakeCase, formateSnakeCaseKeysForCamelCase } from "@/utils/object";
import { library } from "../helpers/connection";

export class BookRepository implements CreateBookRepository, ListBooksRepository {
  async create(params: CreateBookRepository.Params): CreateBookRepository.Result {
    const [id] = await library('tb_book')
      .insert(formateCamelCaseKeysForSnakeCase(params));

    return {
      bookId: id,
      ...params,
    };
  }

  async findAll(): ListBooksRepository.Result {
    const books = await library('tb_book')
      .select('*')
      .whereNull('deleted_at');

    return formateSnakeCaseKeysForCamelCase(books);
  }
}