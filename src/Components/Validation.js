const validate = (fieldName, value, value2) => {
    let valid;
    let error;
    let errorTwo;
    let validData;
    switch (fieldName) {
      
      case "userName":
         valid = value.length >= 3 && value.length <= 50;
        error = valid ? "" : "Please enter valid " + fieldName;
        validData = {
          valid,
          error,
        };
        return validData;
        case "password": 
        valid = value.length >= 6 && value.length <= 50;
        error = valid ? "" : "Please enter valid " + fieldName;
        validData = {
          valid,
          error,
        };
        return validData;
      default:
        return validData;
    }
  };
  
  export default validate;
  