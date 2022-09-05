import { BookModel } from "../../models";

export interface ListBooks {
  findAll: () => ListBooks.Result;
}

export namespace ListBooks {
  export type Result = Promise<BookModel[]>
}