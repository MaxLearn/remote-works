import { getJwtToken } from '../../global/accessToken.ts';
import axios from 'axios';
import { Posting } from '../../../models/Posting'; 

 export const getPostingDetails = async (postingID: any) => {
    try {
        let myToken = getJwtToken();
        let address =  "https://remote-works-backend-production.up.railway.app"
        let route = `/postings/${postingID}`
        let url = address + route
        let headers = { headers : {'Authorization' : `Bearer ${myToken}` }};

      let res = await axios.get(url, headers)
      .catch( function (error) {
        console.log(error)
      })
      if (res) 
      { let data: Posting= res.data ;
     return data;
      }
      
    } catch (e) {
      console.log(e)
    }
  }

 