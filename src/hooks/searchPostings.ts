import axios from 'axios';
import { Posting } from '../models/Posting';

 export const searchPostings = async (minSalary: string, jobTitle: string) => {
    try {

      let address =  "https://remote-works-backend-production.up.railway.app"
      let route = `/search`
      let params = `?minSalary=${minSalary}&title=${jobTitle}`
      let url = address + route + params
     
      
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
