import axios from 'axios';
import { setJwtToken, setRefreshToken } from './accessToken.ts';

 export const signInBusiness = async (email: String, password: String) => {
    try {
      let res = await axios.post(`http://localhost:4000/auth/business`, {'email' : email, 'password' : password})
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

 