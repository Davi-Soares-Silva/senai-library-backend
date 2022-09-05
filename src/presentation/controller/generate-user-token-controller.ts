import { ok, serverError } from "@/utils/response";
import { Controller, HttpRequest, HttpResponse } from "../protocols";
import { GenerateUserToken } from "@/domain/usecases/user";

export class GenerateUserTokenController implements Controller {
  constructor (private readonly generateToken: GenerateUserToken) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { userId } = httpRequest.user;

      const token = await this.generateToken.generate(userId);

      return ok('Usuário autenticado com sucesso!', { token });
    } catch(error) {
      switch(error.message) {
        default:
          return serverError(error);
      }
    }
  }
}