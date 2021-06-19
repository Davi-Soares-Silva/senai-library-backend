import { ok, serverError } from "@/utils/response";
import { Controller, HttpRequest, HttpResponse } from "../protocols";

export class ExampleController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      return ok('Sucess on access example route', {});
    } catch (error) {
      switch(error.message) {
        default:
          return serverError(error);
      }
    }
  }
}