import axios from 'axios';
import { setJwtToken, setRefreshToken } from '../../global/accessToken.ts';

 export const signInUser = async (email: String, password: String) => {
    try {
      let address =  "https://remote-works-backend-production.up.railway.app"
      let route = `/auth/user`
      let url = address + route
      let body = {'email' : email, 'password' : password}
      let res = await axios.post(url, body)
      .catch( function (error) {
        console.log(error)
      })
      if (res) 
      { let data = res.data ;
      console.log(data)
      setJwtToken(data.accessToken)
      setRefreshToken(data.refreshToken)
      }
      
    } catch (e) {
      console.log(e)
    }
  }

 