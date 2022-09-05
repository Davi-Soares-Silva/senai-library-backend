import { HttpResponse } from './';

export interface Middleware<T = any> {
  handle: (httpRequest: T, next: Function) => Promise<HttpResponse | void>
}