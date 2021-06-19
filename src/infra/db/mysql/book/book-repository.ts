import { CreateBookRepository } from "@/data/protocols/db/create-book-repository";
import { formateCamelCaseKeysForSnakeCase } from "@/utils/object";
import { library } from "../helpers/connection";

export class BookRepository implements CreateBookRepository {
  async create(params: CreateBookRepository.Params): CreateBookRepository.Result {
    const [id] = await library('tb_book')
      .insert(formateCamelCaseKeysForSnakeCase(params));

    return {
      bookId: id,
      ...params,
    };
  }
}