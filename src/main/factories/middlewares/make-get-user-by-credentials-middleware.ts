import { GetUserByCredentialsMiddleware } from "@/presentation/middlewares/get-user-by-credentials-middleware"
import { Secret } from "@/infra/encryption"
import { DbGetUserByCredentials } from "@/data/usecases/user";
import { UserRepository } from "@/infra/db/mysql/user/user-repository";

export const makeGetUserByCredentialsMiddleware = () => {
    const encrypter = new Secret();

    const dbGetUserByCredentials = new DbGetUserByCredentials(encrypter, new UserRepository());

    return new GetUserByCredentialsMiddleware(dbGetUserByCredentials);
}