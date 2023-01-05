import { getJwtToken } from './accessToken.ts';
import { getBusinessId } from './getBusinessId.ts';
import axios from 'axios';
import { Posting } from '../../../models/Posting';

 export const getBusinessPostings = async (postingID: any, posting: Posting) => {
    try {
        let myToken = getJwtToken();
        let businessId = getBusinessId();
        let url = `http://localhost:4000/postings/apply/${postingID}`
        let headers = { headers : {'Authorization' : `Bearer ${myToken}` }};

      let res = await axios.patch(url, posting, headers)
      .catch( function (error) {
        console.log(error)
      })
      if (res) 
    console.log(res)
      
    } catch (e) {
      console.log(e)
    }
  }

 