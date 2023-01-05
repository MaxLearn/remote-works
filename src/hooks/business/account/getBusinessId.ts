import jwt_decode, { JwtPayload } from "jwt-decode";
import { getJwtToken } from "../../global/accessToken.ts";

type customJwtPayload = JwtPayload & { userId: string };

export const getBusinessId = () => {
const token = getJwtToken()
const decoded = jwt_decode<customJwtPayload>(token);
return decoded.userId; 

}


