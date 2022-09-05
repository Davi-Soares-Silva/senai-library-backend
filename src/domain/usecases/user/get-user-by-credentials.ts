import { UserModel } from "@/domain/models/user";

export namespace GetUserByCredentials {
    export type Params = {
        email: string;
        password: string;
    }

    export type Result = Promise<UserModel>;
}

export interface GetUserByCredentials {
    get(params: GetUserByCredentials.Params): GetUserByCredentials.Result;
}