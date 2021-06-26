export interface DeleteBookRepository {
  delete(id: number): Promise<void>
}