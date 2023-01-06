import { getJwtToken } from '../../global/accessToken.ts'; 
import axios from 'axios';

 export const updateBusiness = async (businessId: String, businessInfo: Object) => {
    try {
        console.log('in updateBusiness ' + businessInfo)
        let myToken = getJwtToken();
        let address =  "https://remote-works-backend-production.up.railway.app"
        let route = `/business/${businessId}`
        let url = address + route
        let headers = { headers : {'Authorization' : `Bearer ${myToken}` }};
      let res = await axios.patch(url, businessInfo, headers)
      .catch( function (error) {
        console.log(error)
      })
      console.log(res)
      
      
      
    } catch (e) {
      console.log(e)
    }
  }

 