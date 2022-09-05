export namespace GenerateUserToken {

    export type Params = number;

    export type Result = Promise<string>;

}

export interface GenerateUserToken {
    generate(userId: GenerateUserToken.Params): GenerateUserToken.Result;
}