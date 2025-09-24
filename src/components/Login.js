import React from 'react'
import Header from './Header';
import { useState } from 'react';

const Login = () => {
  //build a signup form and we are using use state var to toggle between signin and signup in the same form
  const [signIn,setSignIn] = useState(true); //by default show signin form
  const toggleSignIn = () =>{
        setSignIn(!signIn); // on click toggle the state
  }
  return (
    <div>
        <Header/>
    <div> 
       <img className='absolute' alt='background-img' src='https://assets.nflxext.com/ffe/siteui/vlv3/c95abc7a-8124-4630-bb7a-3b160bdc6de3/web/IN-en-20250915-TRIFECTA-perspective_d3d87aa7-58ed-4c6b-98dc-231ed05ba675_medium.jpg'/>
    </div>
    {/* //login form */}
    <form className='rounded absolute my-24 text-white p-12 right-0 left-0 mx-auto w-4/12 bg-black/75'>
        <h1 className='text-white text-3xl font-semibold p-4'>
          {signIn ? "Sign In":"Sign Up"}
        </h1>
        {/* if sign in is false */}
        {!signIn && <input className='border border-gray rounded p-4 my-4 w-full bg-black/75' type="text" placeholder='Full Name'/>}
         <input className='border border-gray rounded p-4 my-4 w-full bg-black/75' type="text" placeholder='Email Address'/>
        <input className='border border-gray rounded p-4 my-4 w-full bg-black/75' type="password" placeholder='Password'/>
        <button className='rounded py-4 my-4 bg-red-700 w-full' type=''>
             {signIn ? "Sign In":"Sign Up"}
        </button>
        {/* sign up - sign in toggle */}
        <p className='cursor-pointer' onClick={toggleSignIn}>{signIn?"New to Netflix? Sign Up Now" : "Already a member? Sign In Now"}</p>
    </form>
    </div>

  )
}

export default Login;