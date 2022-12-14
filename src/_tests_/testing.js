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
  
  
  console.log(ValidateEmail("bob"))
  console.log(validatePassword("12345"))