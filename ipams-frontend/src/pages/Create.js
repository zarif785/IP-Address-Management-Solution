// import { useState } from "react"
// import { useHistory } from "react-router-dom"

// const Create = () => {

//   const [ip,setIP]=useState('');
//   const [label,setLabel] = useState('');
//   const [isValid,setIsValid]=useState(false)
//   const [isPending, setIsPending] = useState(false)
  
  
//   const history = useHistory();

  

//   const handleSubmit = (e)=>{
//         e.preventDefault()
//         const address={ip,label}

//         fetch('http://localhost:8000/api/addresses',{
//           method: "POST",
//           headers:{
//             'Content-Type': "application/json",
//             "accept" : "application/json"
//           },
//           body: JSON.stringify(address)
//         }).then((res)=>{
//           console.log(res.json)
//         })

//   }

//   // function ValidateIPaddress(ipaddress,label)
//   //       {
//   //       var ipformat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
//   //       if(inputText.value.match(ipformat))
//   //           {
//   //           return true;
//   //           }
//   //       else
//   //           {
//   //           return false;
//   //           }
//   //       }
//   return (
//     <div className="add">
//     <form action="" onSubmit={handleSubmit}>
//         <h2> Add you IP Address </h2>
//         <label htmlFor="">IP Address: </label>
//         <input type="text" required value={ip} onChange={(e)=>{setIP(e.target.value)}}/>
//         {/* <label htmlFor="">Label: </label>
//         <textarea name="" id="" cols="60" rows="3"></textarea> */}
//         <button> Add IP</button>
//         </form>
//     </div>
//   )
// }

// export default Create