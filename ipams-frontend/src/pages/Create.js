import { useState } from "react"
import { useHistory } from "react-router-dom"
import swal from "sweetalert";
import NavigationBar from "../components/NavigationBar";

const Create = () => {
    const [ip_address,setIp_address]=useState('');
    const [label,setLabel] = useState('');
    // const [isValid,setIsValid]=useState(false)
    const [isPending, setIsPending] = useState(false)   
    const [errorMessage,setErrorMessage] = useState(null)
    let history =  useHistory()
    
    const token = localStorage.getItem('auth_token')
    const handleSubmit = (e)=>{
          e.preventDefault()
          const address={ip_address,label}
          console.log(JSON.stringify(address))
          setIsPending(true)
          fetch('http://localhost:8000/api/addresses',{
            method:"POST",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json, text-plain, */*",
                "Authorization":`Bearer ${token}`
                },

            body: JSON.stringify(address)
        }).then((res)=>{
          setIsPending(false)
          return res.json()
        }).then((data)=>{
          if(data.status!==200){
            setErrorMessage(data.message)
          }
          else{
            swal("Success",data.message,"success");
            history.push('/')
          }
        })

  
    }
  return (
    <>
    <NavigationBar/>
    <div className="add">
    <form action="" onSubmit={handleSubmit}>
        <h2> Add your IP Address </h2>
        {errorMessage &&  <span className='errors'>{errorMessage}</span>}
        <label htmlFor="">IP Address </label>
        <input type="text" required value={ip_address} onChange={(e)=>{setIp_address(e.target.value)}}/>
        <label htmlFor="">Label </label>
        <textarea required value={label} onChange={(e)=>{setLabel(e.target.value)}} cols="60" rows="3"></textarea>
        { !isPending && <button> Add IP </button>}
        { isPending && <button> Adding... </button>}
        
        </form>
    

    </div>
    </>
  )
}

export default Create