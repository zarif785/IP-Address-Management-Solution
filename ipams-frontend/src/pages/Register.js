import {useState} from 'react'
import swal from 'sweetalert'
import { useHistory } from 'react-router-dom'
import axios  from 'axios'
import NavigationBar from '../components/NavigationBar'



const Register = () => {

    const history = useHistory()
    const [registerData,setRegisterData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation:'',
    })

    const [errorMessage,setErrorMessage] = useState(null)

    const handleInput=(e)=>{
        e.persist();
        setRegisterData({...registerData,[e.target.name]: e.target.value});
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        const data = {
            name: registerData.name,
            email: registerData.email,
            password: registerData.password,
            password_confirmation: registerData.password_confirmation
        }

        fetch('http://localhost:8000/api/register',{
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

        // axios.post('http://localhost:8000/api/register',data).then(res=>{
        //     if(res.data.status===200){
        //         localStorage.setItem('auth_token',res.data.token);
        //         localStorage.setItem('user_id',res.data.id);
        //         swal("Success",res.data.message,'success')
        //         history.push('/')
        //     }
        //     else{
        //         // console.log(res.data.message);
        //         setErrorMessage(res.data.message)
                
        //     }
        // })
    }


  return (
    <>
    <NavigationBar/>
    <div className="add">
    <form action="" onSubmit={handleSubmit}>
        <h2> Sign up </h2>
        {errorMessage &&  <span className='errors'>{errorMessage}</span>}
       
        <label htmlFor="">Username</label>
        <input name='name' type="text" required value={registerData.name} onChange={handleInput} />
        
        <label htmlFor="">Email</label>
        <input name='email' type="email" required value={registerData.email} onChange={handleInput}/>

        <label htmlFor="">Password</label>
        <input name='password' type="password" required value={registerData.password} onChange={handleInput}/>

        <label htmlFor="">Confirm Password</label>
        <input name='password_confirmation' type="password" required value={registerData.password_confirmation} onChange={handleInput}/>

        <button> Sign Up</button>
        </form>
    </div>
    </>
  )
}

export default Register