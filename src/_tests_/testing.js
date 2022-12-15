const ValidateEmail = (input) => {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ;
  
    if (input.match(validRegex)) {
  

  
      return true;
  
    } else {
  
   
  
      return false;
  
    }
  
  }
  const validatePassword = (input) => {
    return input.length > 4 ? "true" : "false"
  }
  
  
  console.log("testing email validation (bob) should return false")
  console.log(ValidateEmail("bob"))
  console.log("testing email validation (bob@hotmail.com) should return true")
  console.log(ValidateEmail("bob@hotmail.com"))
  console.log("testing password validation (123) should return false")
  console.log(validatePassword("123"))
  console.log("testing password validation (12345) should return true")
  console.log(validatePassword("12345"))