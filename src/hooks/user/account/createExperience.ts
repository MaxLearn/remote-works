import { Experience } from './../../../models/Experiences';
import { getJwtToken } from '../../global/accessToken.ts'; 
import axios from 'axios';

 export const createExperience = async (userId: string, experience: object) => {
    try {
        let myToken = getJwtToken();
        let address =  "https://remote-works-backend-production.up.railway.app"
        let route = `/users/experiences/${userId}`
        let url = address + route
        let headers = { headers : {'Authorization' : `Bearer ${myToken}` }};
      let res = await axios.patch(url, experience, headers)
      .catch( function (error) {
        console.log(error)
      })
      console.log(res)
      
      
      
    } catch (e) {
      console.log(e)
    }
  }

 