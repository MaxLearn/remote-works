import axios from 'axios';
import { setJwtToken, setRefreshToken } from '../../global/accessToken.ts'; 

 export const signInBusiness = async (email: String, password: String) => {
  console.log("this is password: " + password)
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

 