
import { GenerateUserToken } from "@/domain/usecases/user";
import { TokenEncrypter } from "@/data/protocols/encryption";

export class CpGenerateUserToken implements GenerateUserToken {
  constructor (
    private readonly encrypter: TokenEncrypter,
  ) {}
  async generate (userId: GenerateUserToken.Params): GenerateUserToken.Result {
    const token = await this.encrypter.encrypt(userId);

    return token;
  }
}
