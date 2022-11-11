import {useState} from 'react'

const Test = () => {
    const [ip_address,setIp_address]=useState('');
    const [label,setLabel] = useState('');
    // const [isValid,setIsValid]=useState(false)
    // const [isPending, setIsPending] = useState(false)
    
  
    const handleSubmit = (e)=>{
          e.preventDefault()
          const address={ip_address,label}
          console.log(JSON.stringify(address))
          fetch('http://localhost:8000/api/addresses',{
            method:"POST",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json, text-plain, */*",
                },

            body: JSON.stringify(address)
        })
        // axios.post('http://localhost:8000/api/addresses',{
        //     ip_address:ip_address,
        //     label: label
        // })
  
    }
  return (
    <div className="add">
    <form action="" onSubmit={handleSubmit}>
        <h2> Add your IP test </h2>
        
        <label htmlFor="">IP Address: </label>
        <input type="text" required value={ip_address} onChange={(e)=>{setIp_address(e.target.value)}}/>
        <label htmlFor="">Label: </label>
        <textarea required value={label} onChange={(e)=>{setLabel(e.target.value)}} cols="60" rows="3"></textarea>
        <button> Add IP</button>
        </form>
    

    </div>
  )
}

export default Test;