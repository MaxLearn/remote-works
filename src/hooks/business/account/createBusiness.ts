import axios from 'axios';

 export const createBusiness = async (email: String, password: String) => {
    try {
      let res = await axios.post(`http://localhost:4000/business`, {'email' : email, 'password' : password})
      .catch( function (error) {
        console.log(error)
      })
      console.log(res)
      
      
      
    } catch (e) {
      console.log(e)
    }
  }

 