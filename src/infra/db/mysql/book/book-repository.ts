import { 
  CreateBookRepository,
  DeleteBookRepository,
  ListBooksRepository,
  UpdateBookRepository
} from "@/data/protocols/db";

import {
  formateCamelCaseKeysForSnakeCase,
  formateSnakeCaseKeysForCamelCase
} from "@/utils/object";

import { library } from "../helpers/connection";

export class BookRepository implements
  CreateBookRepository,
  ListBooksRepository,
  DeleteBookRepository,
  UpdateBookRepository {

  async create(params: CreateBookRepository.Params): CreateBookRepository.Result {
    const [id] = await library('tb_book')
      .insert(formateCamelCaseKeysForSnakeCase(params));

    return {
      id,
      ...params,
    };
  }

  async findAll(): ListBooksRepository.Result {
    const books = await library('tb_book')
      .select(
        'book_id',
        'title',
        'little_image',
        'image',
        'details'
      )
      .whereNull('deleted_at')
      .orderBy('book_id', 'desc');

    return formateSnakeCaseKeysForCamelCase(books);
  }

  async delete(id: number): Promise<void> {
    await library('tb_book')
      .update('deleted_at', new Date())
      .where('book_id', '=', id);
  }

  async update(params: UpdateBookRepository.Params): UpdateBookRepository.Result {
    const { id, ...book } = params;

    await library('tb_book')
      .update({
        ...formateCamelCaseKeysForSnakeCase({ ...book })
      })
      .where('book_id', '=', id);
  }
}