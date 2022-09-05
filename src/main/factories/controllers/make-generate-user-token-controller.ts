import { GenerateUserTokenController } from "@/presentation/controller"
import { JwtAdapter } from "@/infra/encryption";
import { SECRET } from "@/utils/constants";
import { CpGenerateUserToken } from "@/data/usecases/user/cp-generate-user-token";

export const makeGenerateUserTokenController = () => {
    const jwtAdapter = new JwtAdapter(SECRET.JWT_SECRET);
    const dbGenerateUserToken = new CpGenerateUserToken(jwtAdapter);

    return new GenerateUserTokenController(dbGenerateUserToken);
}