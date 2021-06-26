import { 
  CreateBookRepository,
  DeleteBookRepository,
  ListBooksRepository
} from "@/data/protocols/db";

import {
  formateCamelCaseKeysForSnakeCase,
  formateSnakeCaseKeysForCamelCase
} from "@/utils/object";

import { library } from "../helpers/connection";

export class BookRepository implements
  CreateBookRepository,
  ListBooksRepository,
  DeleteBookRepository {

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

  async delete(id: number): Promise<void> {
    await library('tb_book')
      .update('deleted_at', new Date())
      .where('id', '=', id);
  }
}