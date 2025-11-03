import React, { useRef } from 'react'
import Header from './Header';
import { useState} from 'react';
import { validateForm } from '../utils/validateForm';

const Login = () => {
  //build a signup form and we are using use state var to toggle between signin and signup in the same form
  const [signIn,setSignIn] = useState(true); //by default show signin form
  const toggleSignIn = () =>{
        setSignIn(!signIn); // on click toggle the state
  }
  //check email and password is valid or not
  const email = useRef(null);
  const password = useRef(null);
  //state var to store error message
  const [errorMessage,setErrorMessage] = useState(null);
  const handleValidation = () =>{
    //validation function called here
    //how will our validation function know which email and password to validate?
    // 1. we can use state vars for mail and pwd and bind the input fields to those state vars. as soon as input is changed the state var will be updated
    //2. useRef hook - used to directly access a DOM element and its value
    //i need a ref to imput box and that reference is created by react using useRef hook
     
    const message = validateForm(email.current.value,password.current.value);
    console.log(email.current.value,password.current.value);
    // console.log(message);
    setErrorMessage(message); //set the error message
  }
  return (
    <div>
        <Header/>
    <div> 
       <img className='absolute' alt='background-img' src='https://assets.nflxext.com/ffe/siteui/vlv3/c95abc7a-8124-4630-bb7a-3b160bdc6de3/web/IN-en-20250915-TRIFECTA-perspective_d3d87aa7-58ed-4c6b-98dc-231ed05ba675_medium.jpg'/>
    </div>
    {/* //login form */}
    {/* since our form is not submitting anything so toh not refresh the page on click use e.preventDefault() */}
    <form onSubmit={(e)=>e.preventDefault()} className='rounded absolute my-24 text-white p-12 right-0 left-0 mx-auto w-4/12 bg-black/75'>
        <h1 className='text-white text-3xl font-semibold p-4'>
          {signIn ? "Sign In":"Sign Up"}
        </h1>
        {/* if sign in is false */}
        {!signIn && <input className='border border-gray rounded p-4 my-4 w-full bg-black/75' type="text" placeholder='Full Name'/>}
         <input ref={email} className='border border-gray rounded p-4 my-4 w-full bg-black/75' type="text" placeholder='Email Address'/>
        <input ref={password} className='border border-gray rounded p-4 my-4 w-full bg-black/75' type="password" placeholder='Password'/>
        {/* on click check email and password is valid or not */}
        <p className='font-semibold text-red-400'>{errorMessage}</p>
        <button onClick={handleValidation} className='rounded py-4 my-4 bg-red-700 w-full' type=''>
             {signIn ? "Sign In":"Sign Up"}
        </button>
        {/* sign up - sign in toggle */}
        <p className='cursor-pointer' onClick={toggleSignIn}>{signIn?"New to Netflix? Sign Up Now" : "Already a member? Sign In Now"}</p>
    </form>
    </div>

  )
}

export default Login;