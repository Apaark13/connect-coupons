import {useState,useHistory} from 'react'
import { unstable_HistoryRouter } from 'react-router-dom'
import './Register.scss'

function Register() {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  //  const history=useHistory()
//  async function registerUser(event)
//  {

//   event.preventDefault()
//    const res=await fetch('http://localhost:5000/api/register',{
//    method:'POST',  
//    headers:{
//         'Content-Type':'application/json',
//        },
//    body:JSON.stringify({
//         name,
//         email,
//         password
//        }),
//    })
//    console.log(res.body)
//    const data=await res.json()
//    console.log(data)
//   //  if(data.status==='ok')
//   //  {
//   //   history.pushState('/login')
//   //  }
//  }
  return (
    <div className='register'>
      <h1>Register</h1>
      <form >
           <input 
           value={name}
           onChange={(e)=>setName(e.target.value)}
           type='text' 
           placeholder='Name' />
           <br/>
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
            <input className='button' type='submit' value='Register'/>
      </form>
    </div>
  );
}

export default Register;
