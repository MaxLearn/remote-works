import { getJwtToken } from '../../global/accessToken.ts'; 
import axios from 'axios';
 export const addToFav = async (postingID: any) => {
    try {
        let myToken = getJwtToken();
        let address =  "https://remote-works-backend-production.up.railway.app"
        //CHANGE ROUTE 
        let route = `/users/applications/favorite/${postingID}`
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

 