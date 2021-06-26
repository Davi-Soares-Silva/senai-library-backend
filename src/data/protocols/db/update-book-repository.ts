import { BookModel } from "@/domain/models";

export interface UpdateBookRepository {
  update(params: UpdateBookRepository.Params): UpdateBookRepository.Result;
}

export namespace UpdateBookRepository {
  export type Params = BookModel;

  export type Result = Promise<void>;
}