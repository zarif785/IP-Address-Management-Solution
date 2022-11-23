import React from 'react'
import { useState } from 'react'
import swal from 'sweetalert'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import NavigationBar from '../components/NavigationBar';
const Login = () => {

  const [loginData,setLoginData] = useState({
    email: '',
    password: '',
})

const [errorMessage,setErrorMessage] = useState(null)

const history = useHistory()

const handleInput=(e)=>{
    e.persist();
    setLoginData({...loginData,[e.target.name]: e.target.value});
}


const handleSubmit=(e)=>{
  e.preventDefault();
  const data = {
    
      email: loginData.email,
      password: loginData.password,
      
  }

  fetch('http://localhost:8000/api/login',{
      method: "POST",
      headers:{
          "Content-Type":"application/json",
          "Accept":"application/json, text-plain, */*",
      },
      body: JSON.stringify(data)
  }).then((response)=>{
      return response.json();
  }).then((data)=>{
      if(data.status!==200){
          setErrorMessage(data.message)
      }
      else{
          localStorage.setItem('auth_token',data.token);
          localStorage.setItem('user_id',data.id);
          swal("Success",data.message,'success')
          history.push('/')
      }

  })

  // axios.post()
  
}

  return (
    <>
    <NavigationBar/>
    <div className="add">  
    <form action="" onSubmit={handleSubmit}>
        <h2> Login</h2>
        {errorMessage &&  <span className='errors'>{errorMessage}</span>}

        <label htmlFor="">Email</label>
        <input name='email' type="email" required value={loginData.email} onChange={handleInput}/>

        <label htmlFor="">Password</label>
        <input name='password' type="password" required value={loginData.password} onChange={handleInput}/>

        <button>Login</button>
        </form>

        <p> Don't have an account?  <b> <Link to='/register'> Sign Up </Link></b></p>
    </div>
    </>
  )
}

export default Login