import { getJwtToken } from '../../global/accessToken.ts'; 
import axios from 'axios';

 export const updateUser = async (userId: String, userInfo: Object) => {
    try {
        console.log('in updateUser ' + userInfo)
        let myToken = getJwtToken();
        let address =  "https://remote-works-backend-production.up.railway.app"
        let route = `/users/${userId}`
        let url = address + route
        let headers = { headers : {'Authorization' : `Bearer ${myToken}` }};
      let res = await axios.patch(url, userInfo, headers)
      .catch( function (error) {
        console.log(error)
      })
      console.log(res)
      
      
      
    } catch (e) {
      console.log(e)
    }
  }

 