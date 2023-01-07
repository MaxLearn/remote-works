import { getJwtToken } from '../../global/accessToken.ts'; 
import axios from 'axios';
import { Posting } from '../../../models/Posting';

 export const updateBusinessPosting = async (postingID: any, posting: Posting) => {
    try {

        let myToken = getJwtToken();
        let address =  "https://remote-works-backend-production.up.railway.app"
        let route = `/postings/${postingID}`
        let url = address + route
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

 