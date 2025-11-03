
export const validateForm = (email,password) =>{
    //regex for email validation
    //test() method executes a search for a match between a regular expression and a specified string. Returns true or false.
    let isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    //regex for password validation
    let isValidPwd = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password); //min 8 char, at least one letter and one number
    if(!isValidEmail){
        return "Email is not valid";
    }
    if(!isValidPwd){
        return "Password is not valid";
    }
    return null; //means both email and password are valid
}