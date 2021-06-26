import { BookModel } from "../models";

export interface UpdateBook {
  update: (params: UpdateBook.Params) => UpdateBook.Result;
}

export namespace UpdateBook {
  export type Params = BookModel;

  export type Result = Promise<void>;
}