import React from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.scss'


const Login = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigateTo = useNavigate(); 

    async function loginUser(event){
      event.preventDefault()
     const res=await fetch('http://localhost:5000/login',{
     method:'POST',  
     headers:{
        'Content-Type':'application/json',
       },
   body:JSON.stringify({
        email,
        password
       }),
   })
   const data=await res.json()
   if(data.status==='ok')
    {
    navigateTo('/user')
   }
   console.log(data)
    }
  return (
    <div className='login'>
      
      <h1>Login</h1>
      <form onSubmit={loginUser}>
          
           <input 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            type='email' 
            placeholder='Email' />
            <br/>
           <input 
           type='password' 
           placeholder='password' 
           value={password}
           onChange={(e)=>setPassword(e.target.value)}
           />
           <br/>
          
           <input className='button' type='submit' value='Login'/>
         
            
      </form>
    </div>
  )
}

export default Login
