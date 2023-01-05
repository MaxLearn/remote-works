import { getJwtToken } from '../../global/accessToken'; 
import { getUserId } from '../account/getUserId';
import axios from 'axios';
 export const applyPosting = async (postingID: any) => {
    try {
        let myToken = getJwtToken();
        let userId = getUserId();
        let url = `http://localhost:4000/postings/apply/${postingID}`
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

 