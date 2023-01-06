import axios from 'axios';

 export const createBusiness = async (email: String, password: String) => {
    try {
      let address =  "https://remote-works-backend-production.up.railway.app"
      let route = `/business`
      let url = address + route
      let body ={'email' : email, 'password' : password}
      
      let res = await axios.post(url, body)
      .catch( function (error) {
        console.log(error)
      })
      console.log(res)
      
      
      
    } catch (e) {
      console.log(e)
    }
  }

 