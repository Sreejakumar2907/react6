import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react'
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom"
import { useState } from 'react';
import '../Pages/SignUp.css'
import { auth } from '../Components/firebase';

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const signUp = (e) => {
        e.preventDefault();
        // Check if email and password fields are not empty
        if (!email || !password) {
            setErrorMessage("Fill all fields");
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                alert("Signed In");
                console.log(userCredential);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <>
            <div className='login'>

                <h2 ><Link className='login-span' to='/Login'>Login</Link><span className='signUp-span'> | Signup </span></h2>

                <form onSubmit={signUp}>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className='email' type='email' placeholder='Email' /><MdEmail color=' beige' className='email-icon' /><br />
                    <input value={password} onChange={(e) => setPassword(e.target.value)} className='password' type='password' placeholder='Password' /><RiLockPasswordFill color=' beige' className='password-icon' /><br />
                    <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder='Confirm Password' className='confirm-password' />
                    <button type="submit" className='Signup-btn'>SignUp</button>

                </form>
            </div>
            {errorMessage && <small className='error'>{errorMessage}</small>}
        </>
    )
}

export default SignUp