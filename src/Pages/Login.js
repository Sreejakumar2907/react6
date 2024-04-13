import React from 'react'
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth'; 
import { auth } from '../Components/firebase';
import AuthDetails from '../Components/AuthDetails';
import { Link } from 'react-router-dom';
import '../Pages/SignUp.css'
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login=(e)=>{
    e.preventDefault()
    signInWithEmailAndPassword(auth,email,password)
    .then(( userCredential)=>{
     console.log(userCredential);
    })
    .catch(( error)=>{
      console.log(error);
     })
}
  return (
   <>
  <div className='login'>
    <h2 className='heading'>Login |  <Link className='signUp' to='/SignUp'>SignUp</Link></h2>

  <form onSubmit={login}>
  <input className='email' value={email}onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' /><MdEmail color=' beige'  className='email-icon'/><br/>
   <input className='password' value={password}onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' /><RiLockPasswordFill color=' beige' className='password-icon' /><br/>
   <button type='submit' className='Login-btn'>Login</button>
  </form>
  <div className='authDetails'><AuthDetails/></div>
  </div>
   </>
  )
}

export default Login