import { getJwtToken } from '../../global/accessToken.ts';
import { getBusinessId } from './getBusinessId.ts';
import axios from 'axios';
import { Business } from '../../../models/Business';

 export const getBusinessProfile = async () => {
    try {
        let myToken = getJwtToken();
        let businessId = getBusinessId();
        console.log("in getBusinessProfile" + businessId)
        let address =  "https://remote-works-backend-production.up.railway.app"
        let route = `/business/${businessId}`
        let url = address + route
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

 