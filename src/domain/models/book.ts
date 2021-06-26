export type BookModel = {
  id: number;
  title: string;
  publishingCompany: string;
  cover: string;
  authors: string[]
}

export type CreateBookModel = Omit<
  BookModel,
  'id' | 'createdAt' | 'deletedAt'
>