import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Login.css';

export default function Login() {
    const[User,setUser]=useState();

    const abc=(e)=>{
        setUser(e.target.value);
        localStorage.setItem("Username",User);

    }

  return (
    <>
    <div className="container">
        <input type="text" value={User} placeholder='UserName' onChange={abc}/>
        <input type="password" placeholder='password'/>
        <Link to="Home"><button className='btn'>Login</button></Link>
    </div>

    </>
  )
}
