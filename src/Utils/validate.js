export const checkValidData  = (email , password) => {

//    const isNameValid = /^([a-zA-z,/.-]+)\s([a-zA-z,/.-]+)$/.test(name)
   
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    // if(!isNameValid) return "name is not valid "
    if(!isEmailValid) return "Email id is not valid";
    if(!isPasswordValid) return "Password is not valid"

    return null;



}