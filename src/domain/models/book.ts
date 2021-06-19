export type BookModel = {
  bookId: number;
  title: string;
  publishingCompany: string;
  cover: string;
  authors: string[];
  createdAt: string;
  deletedAt: string;
}

export type CreateBookModel = Omit<
  BookModel,
  'bookId' | 'createdAt' | 'deletedAt'
>