import jwt_decode, { JwtPayload } from "jwt-decode";
import { getJwtToken } from './accessToken.ts';

type customJwtPayload = JwtPayload & { userId: string };

export const getUserId = () => {
const token = getJwtToken()
const decoded = jwt_decode<customJwtPayload>(token);
return decoded.userId; 

}