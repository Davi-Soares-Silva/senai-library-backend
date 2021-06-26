import { BookModel } from "@/domain/models";

export interface ListBooksRepository {
  findAll(): ListBooksRepository.Result;
}

export namespace ListBooksRepository {
  export type Result = Promise<BookModel[]>
}