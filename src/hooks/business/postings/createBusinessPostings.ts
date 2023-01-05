import { getJwtToken } from './accessToken.ts';
import axios from 'axios';
import { Posting } from '../../../models/Posting';

 export const createBusinessPostings = async (newPosting: Posting) => {
    try {
        let myToken = getJwtToken();
        let url = `http://localhost:4000/business/postings`
        let headers = { headers : {'Authorization' : `Bearer ${myToken}` }};

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

 