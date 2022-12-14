import { getJwtToken } from './accessToken.ts';
import axios from 'axios';

 export const updateUser = async (userId: String, userInfo: Object) => {
    try {
        console.log('in updateUser ' + userInfo)
        let myToken = getJwtToken();
        let headers = { headers : {'Authorization' : `Bearer ${myToken}` }};
      let res = await axios.patch(`http://localhost:4000/users/${userId}`, userInfo, headers)
      .catch( function (error) {
        console.log(error)
      })
      console.log(res)
      
      
      
    } catch (e) {
      console.log(e)
    }
  }

 