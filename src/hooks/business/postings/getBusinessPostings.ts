import { getJwtToken } from '../../global/accessToken';
import { getBusinessId } from '../account/getBusinessId'; 
import axios from 'axios';
import { Posting } from '../../../models/Posting';

 export const getBusinessPostings = async () => {
    try {
        let myToken = getJwtToken();
        let businessId = getBusinessId();
        let url = `http://localhost:4000/business/postings/${businessId}`
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

 