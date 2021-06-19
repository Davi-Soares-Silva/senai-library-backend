import { CreateBookModel, BookModel } from '../models'

export interface CreateBook {
  create: (params: CreateBook.Params) => CreateBook.Result;
}

export namespace CreateBook {
  export type Params = CreateBookModel;
  type createdBook = Omit<
    BookModel,
    'createdAt' | 'deletedAt'
  >
  
  export type Result = Promise<createdBook>;
}