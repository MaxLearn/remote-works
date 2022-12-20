import jwt_decode, { JwtPayload } from "jwt-decode";
import { getJwtToken } from './accessToken.ts';

type customJwtPayload = JwtPayload & { businessId: string };

export const getBusinessId = () => {
const token = getJwtToken()
const decoded = jwt_decode<customJwtPayload>(token);
return decoded.businessId; 

}