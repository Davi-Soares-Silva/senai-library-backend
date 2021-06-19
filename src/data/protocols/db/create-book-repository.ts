import { BookModel, CreateBookModel } from "@/domain/models";

export interface CreateBookRepository {
  create(params: CreateBookRepository.Params): CreateBookRepository.Result;
}

export namespace CreateBookRepository {
  export type Params = CreateBookModel;

  export type createdBook = Omit<
    BookModel,
    'createdAt' | 'deletedAt'
  >
  export type Result = Promise<createdBook>;
}