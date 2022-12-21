import { useNavigate as Navigate} from 'react-router-dom';
import { getUserId } from './getUserId';
import { getAccountType } from './accountType';


const navigateSignin = () => {
    const navigate = Navigate();
    alert("Please sign in to access your profile");
    return navigate("/signin")
}
export const navigateProfile = () => {
    const navigate = Navigate();
let user = getUserId();
let accountType = getAccountType();
if (!user){return navigateSignin} 
else if (accountType === "employee") {navigate("/ProfileUser")}
else if (accountType === "business") {navigate("/ProfileBusiness")}
}