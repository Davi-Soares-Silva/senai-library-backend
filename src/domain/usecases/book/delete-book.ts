export interface DeleteBook {
  delete: (id: number) => Promise<void>
}