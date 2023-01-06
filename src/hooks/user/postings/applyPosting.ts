import { getJwtToken } from '../../global/accessToken.ts'; 
import axios from 'axios';
 export const applyPosting = async (postingID: any) => {
    try {
        let myToken = getJwtToken();
        let address =  "https://remote-works-backend-production.up.railway.app"
        let route = `/apply/${postingID}`
        let url = address + route
        let headers = { headers : {'Authorization' : `Bearer ${myToken}` }};
      let res = await axios.get(url, headers)
      .catch( function (error) {
        console.log(error)
      })
      if (res) 
     console.log(res)
      
    } catch (e) {
      console.log(e)
    }
  }

 