import { UserModel } from "./user-model";

export namespace GetUserByCredentialsRepository {

    export type Params = {
        email: string;
        password: string;
    }

    export type Result = Promise<UserModel>;
}

export interface GetUserByCredentialsRepository {
    findByCredentials(params: GetUserByCredentialsRepository.Params): GetUserByCredentialsRepository.Result;
}