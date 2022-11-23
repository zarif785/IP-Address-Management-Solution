import React from 'react'
import { useState } from 'react';
import swal from 'sweetalert';
import NavigationBar from '../components/NavigationBar'
import { useHistory } from 'react-router-dom';


const Edit = () => {
    const id = localStorage.getItem('ip_id')
    const token = localStorage.getItem('auth_token')
    const [label,setLabel] = useState(localStorage.getItem('user_label'));
    const [errorMessage,setErrorMessage] = useState(null)
    const [isPending, setIsPending] = useState(false)   
    const ip_address = localStorage.getItem('user_ip')

    const history = useHistory()

    const handleSubmit=(e)=>{
        e.preventDefault();
        const data = {
          
            label:label
            
        }
        setIsPending(true)
      
        fetch(`http://localhost:8000/api/addresses/${id}`,{
            method: "PUT",
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json, text-plain, */*",
                "Authorization":`Bearer ${token}`
            },
            body: JSON.stringify(data)
        }).then((response)=>{
            setIsPending(false)
            return response.json();
        }).then((data)=>{
            if(data.status!==200){
                setErrorMessage(data.message)
            }
            else{
                localStorage.removeItem('user_ip');
                localStorage.removeItem('user_label');
                localStorage.removeItem('ip_id');
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
        <h2> Edit your IP Address </h2>
        {errorMessage &&  <span className='errors'>{errorMessage}</span>}
        <label htmlFor="">IP Address </label>
        <h2>{ip_address}</h2>
        <label htmlFor="">Label </label>
        <textarea cols="60" rows="3" value={label} onChange={(e)=>{setLabel(e.target.value)}}></textarea>
       
        { !isPending && <button> Edit Label </button>}
        { isPending && <button> Editing... </button>}
        </form>
    

    </div>
    </>
  )
}

export default Edit