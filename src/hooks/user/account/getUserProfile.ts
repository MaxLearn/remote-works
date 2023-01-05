import { getJwtToken } from '../../global/accessToken'; 
import { getUserId } from './getUserId'; 
import axios from 'axios';
import { User } from '../../../models/User';

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
      { let data: User = res.data ;
     return data;
      }
      
    } catch (e) {
      console.log(e)
    }
  }

 