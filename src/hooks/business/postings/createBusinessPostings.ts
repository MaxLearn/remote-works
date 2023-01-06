import { getJwtToken } from '../../global/accessToken.ts';
import axios from 'axios';
import { Posting } from '../../../models/Posting';

 export const createBusinessPostings = async (newPosting : any) => {
    try {
        let myToken = getJwtToken();
        let address =  "https://remote-works-backend-production.up.railway.app"
        let route = `/postings`
        let url = address + route
        let headers = { headers : {'Authorization' : `Bearer ${myToken}` }};

        console.log(url)

      let res = await axios.post(url, newPosting, headers)
      .catch( function (error) {
        console.log(error)
      })
      if (res) 
     console.log(res);
      
    } catch (e) {
      console.log(e)
    }
  }

 