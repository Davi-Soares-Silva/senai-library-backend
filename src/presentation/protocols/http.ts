import { Request } from "express";

export interface HttpRequest extends Request {
  files?: any;
}

export interface HttpResponse {
  statusCode: number;
  body?: any;
  headers?: any;
}
