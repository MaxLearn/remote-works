import axios from 'axios';
import { Posting } from '../models/Posting';

 export const getPostings = async () => {
    try {
        let url = `http://localhost:4000/postings`

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
