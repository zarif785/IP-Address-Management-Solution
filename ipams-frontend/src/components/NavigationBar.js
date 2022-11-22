import {Link} from 'react-router-dom'
import swal from 'sweetalert'
import { useHistory } from 'react-router-dom'

const NavigationBar = () => {

  const history = useHistory()
  var AuthButtons = ''
  const token = localStorage.getItem('auth_token')
  const logoutSubmit =(e)=>{
    e.preventDefault()
    fetch('http://localhost:8000/api/logout',{
      method: "POST",
      headers:{
          "Content-Type":"application/json",
          "Accept":"application/json, text-plain, */*",
          "Authorization":`Bearer ${token}`
      },
  }).then((response)=>{
    console.log(token);
    return response.json();
    
  }).then((data)=>{
    if(data.status === 200){
      // localStorage.removeItem("auth_token")
      // localStorage.removeItem("user_id")
      localStorage.clear()
      swal("Success",data.message,'success')
      history.push('/login')
    }
  })
  }

  if(localStorage.getItem('auth_token')){
    AuthButtons = (
      <>
            <Link to='/create'> Add IP</Link>
            <Link to='/show'>My IP</Link>
            <button className='logout-button' onClick={logoutSubmit}>Logout</button>

      </>
    )
  }
  else{
    AuthButtons=(
      <>
      <Link to='/register'>Sign Up</Link>
      <Link to='/login'>Login</Link>
</>
    )

  }

  return (
    <div className="navbar">
        <h2>IP Address Manager</h2>
        <div className="links">
            <Link to='/'>Home</Link>
            {AuthButtons}

        </div>
    </div>
  )
}

export default NavigationBar