import { getJwtToken } from './accessToken.ts';
import { getBusinessId } from './getBusinessId.ts';
import axios from 'axios';
import { Business } from '../models/Business';

 export const getBusinessProfile = async () => {
    try {
        let myToken = getJwtToken();
        let businessId = getBusinessId();
        let url = `http://localhost:4000/business/${businessId}`
        let headers = { headers : {'Authorization' : `Bearer ${myToken}` }};
      let res = await axios.get(url, headers)
      .catch( function (error) {
        console.log(error)
      })
      if (res) 
      { let data: Business = res.data ;
     return data;
      }
      
    } catch (e) {
      console.log(e)
    }
  }

 