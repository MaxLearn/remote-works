import axios from 'axios';
import { Posting } from '../models/Posting';

 export const searchPostings = async (minSalary: number, jobTitle: string) => {
    try {

      let address =  "https://remote-works-backend-production.up.railway.app"
      let route = `/search`
      let url = address + route
      let params = `?minSalary=${minSalary}?maxSalary=?title=${jobTitle}`
      
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
