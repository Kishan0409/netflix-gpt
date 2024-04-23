import React, { useRef, useState } from 'react'
import {createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import Header from './Header';
import { checkValidData } from '../Utils/validate';
import {auth} from "../Utils/Firebase"
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()

    const[isSignInForm , setIsSignInForm] = useState(true)
    const[errorMessage , setErrorMessage] = useState(null);

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
        // validate the form data

        console.log(email.current.value);
        console.log(password.current.value);

      const message =   checkValidData(email.current.value , password.current.value);
      setErrorMessage(message); 

      if(message) return 

        //sign in / Sign up 
        if(!isSignInForm) {
          createUserWithEmailAndPassword(
            auth,
            email.current.value , 
            password.current.value)


  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
    navigate("/browse")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "--" + errorMessage)
    // ..
  });
          //SignUpLogic

        }else {
          //SignInLogic
          signInWithEmailAndPassword(
            auth, 
            email.current.value ,
            password.current.value)

  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    navigate("/browse")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "--" + errorMessage)
  });
        }

      

    

    




    }

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);

    }
  return (
    <div>
        <Header />
        <div className="absolute">          
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg'
         alt='bg-url' />
         </div>
         <form 
          onSubmit={(e) => {e.preventDefault()}}
         className=" w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"> 
         <h1 className="font-bold text-3xl py-4">{isSignInForm ? "sign In" : "sign Up"}</h1>
         {!isSignInForm && (<input 

            type='text' 
            ref={name}
            placeholder='Full Name'

              className="p-4 my-4 w-full bg-gray-700"  />
              )}

            <input 
            ref={email}
            type='text'
             placeholder='email address'
              className="p-4 my-4 w-full bg-gray-700"  />

            <input 
            ref={password}
            type='password'
             placeholder='Password'
              className="p-4 my-4 w-full bg-gray-700" />

              <p clasName="text-red-500">{errorMessage}</p>

            <button onClick={handleButtonClick} className= "p-4 my-6 bg-red-500 w-full cursor-pointer rounded-lg">
                {isSignInForm ? "sign In" : "sign Up"}</button>
            <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
                {isSignInForm ? "New to netflix? Sign up now" : "Alread registered? Sign In Now"}</p>
         </form>
    </div>
  )
}

export default Login;