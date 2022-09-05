import { GetUserByCredentials } from "@/domain/usecases/user";
import { Encrypt } from "@/data/protocols/encryption";
import { GetUserByCredentialsRepository } from "@/data/protocols/db";

export class DbGetUserByCredentials implements GetUserByCredentials {
    constructor(private readonly encrypter: Encrypt, private readonly getUser: GetUserByCredentialsRepository) {}

    async get(params: GetUserByCredentials.Params): GetUserByCredentials.Result {
        const encryptedPassword = this.encrypter.encrypt(params.password);

        console.log(encryptedPassword);

        const user = await this.getUser.findByCredentials({
            email: params.email,
            password: encryptedPassword,
        })

        if (!user) throw new Error('USER_NOT_FOUND');

        return user;
    }
}