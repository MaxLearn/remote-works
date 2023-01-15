import { getJwtToken } from '../../global/accessToken.ts';
import axios from 'axios';
import { User } from '../../../models/User';

 export const getApplicants = async (postingId: string) => {
    try {
        let myToken = getJwtToken();
        let address =  "https://remote-works-backend-production.up.railway.app"
        let route = `/postings/getusers/${postingId}`
        let url = address + route
        let headers = { headers : {'Authorization' : `Bearer ${myToken}` }};

      let res = await axios.get(url, headers)
      .catch( function (error) {
        console.log(error)
      })
      if (res) 
      { let data: User[] = res.data ;
     return data;
      }
      
    } catch (e) {
      console.log(e)
    }
  }

 