import { getJwtToken } from '../../global/accessToken.ts'; 
import { getUserId } from '../account/getUserId'
import axios from 'axios';
import { Posting } from '../../../models/Posting';

 export const getFavorites = async () => {
    try {
        let myToken = getJwtToken();
        let userId = getUserId();
        let address =  "https://remote-works-backend-production.up.railway.app"
        //CHANGE ROUTE
        let route = `TO DO`
        let url = address + route
        let headers = { headers : {'Authorization' : `Bearer ${myToken}` }};
      let res = await axios.get(url, headers)
      .catch( function (error) {
        console.log(error)
      })
      if (res) 
      { let data: Posting[] = res.data ;
        return data;
         }
      
    } catch (e) {
      console.log(e)
    }
  }

 