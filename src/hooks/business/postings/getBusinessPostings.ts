import { getJwtToken } from '../../global/accessToken.ts';
import { getBusinessId } from '../account/getBusinessId.ts'; 
import axios from 'axios';
import { Posting } from '../../../models/Posting';

 export const getBusinessPostings = async () => {
    try {
        let myToken = getJwtToken();
        let businessId = getBusinessId();
        let address =  "https://remote-works-backend-production.up.railway.app"
        let route = `/business/postings/${businessId}`
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

 