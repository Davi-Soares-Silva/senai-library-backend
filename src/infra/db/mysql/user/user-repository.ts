import { GetUserByCredentialsRepository } from "@/data/protocols/db";
import { library } from "../helpers/connection";
import { formateSnakeCaseKeysForCamelCase } from "@/utils/object";

export class UserRepository implements GetUserByCredentialsRepository {
    async findByCredentials(params: GetUserByCredentialsRepository.Params): GetUserByCredentialsRepository.Result {
        const user = await library('tb_user')
            .select('*')
            .where('email', '=', params.email)
            .where('password', '=', params.password)
            .first();

        return formateSnakeCaseKeysForCamelCase(user);
    }
}