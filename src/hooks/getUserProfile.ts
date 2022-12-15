import { getJwtToken } from './accessToken.ts';
import { getUserId } from './getUserId.ts';
import axios from 'axios';

 export const getUserProfile = async () => {
    try {
        let myToken = getJwtToken();
        let userId = getUserId();
        let url = `http://localhost:4000/users/${userId}`
        let headers = { headers : {'Authorization' : `Bearer ${myToken}` }};
      let res = await axios.get(url, headers)
      .catch( function (error) {
        console.log(error)
      })
      if (res) 
      { let data: Object = res.data ;
      console.log(data)
     return data;
      }
      
    } catch (e) {
      console.log(e)
    }
  }

 