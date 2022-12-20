import { getJwtToken } from './accessToken.ts';
import axios from 'axios';

 export const updateBusiness = async (businessId: String, businessInfo: Object) => {
    try {
        console.log('in updateBusiness ' + businessInfo)
        let myToken = getJwtToken();
        let headers = { headers : {'Authorization' : `Bearer ${myToken}` }};
      let res = await axios.patch(`http://localhost:4000/business/${businessId}`, businessInfo, headers)
      .catch( function (error) {
        console.log(error)
      })
      console.log(res)
      
      
      
    } catch (e) {
      console.log(e)
    }
  }

 