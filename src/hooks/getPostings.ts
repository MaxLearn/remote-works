import axios from 'axios';
import { Posting } from '../models/Posting';

 export const getPostings = async () => {
    try {

      let address =  "https://remote-works-backend-production.up.railway.app"
      let route = `/postings`
      let url = address + route
      
      let res = await axios.get(url)
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
