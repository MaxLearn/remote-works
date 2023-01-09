import { getJwtToken } from '../../global/accessToken.ts'; 
import axios from 'axios';
 export const removeFromFav = async (postingID: any) => {
    try {
        let myToken = getJwtToken();
        let address =  "https://remote-works-backend-production.up.railway.app"
        //CHANGE ROUTE 
        let route = `to figure out`
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

 