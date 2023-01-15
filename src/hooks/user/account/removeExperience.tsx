import { getJwtToken } from '../../global/accessToken.ts'; 
import axios from 'axios';

 export const removeExperience = async (userId: string, expID: string) => {
    try {
        let myToken = getJwtToken();
        let address =  "https://remote-works-backend-production.up.railway.app"
        let route = `/users/experiences/remove/${userId}`
        let url = address + route
        let body = {expID : expID}
        let headers = { headers : {'Authorization' : `Bearer ${myToken}` }};
      let res = await axios.patch(url, body, headers)
      .catch( function (error) {
        console.log(error)
      })
      console.log(res)
      
      
      
    } catch (e) {
      console.log(e)
    }
  }

 