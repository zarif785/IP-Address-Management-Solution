import { useState,useEffect} from "react"
import IPList from "./IPList"

const Home = () => {

const [address,setAddress]=useState(null)
const [isPending, setIsPending] = useState(true)
const [error,setError]=useState(null)


    useEffect(()=>{
        fetch('http://localhost:8000/address').then(
            (res)=>{
                if(!res.ok){
                   throw Error("Could not fetch data from endpoint") 
                }
                return res.json()
            }).then(

                (data)=>{
                    setAddress(data);
                    setIsPending(false);
                    setError(null);
                }
            ).catch(
                err=>{
                    setError(err.message)
                    setIsPending(false)
                }
            )},[])

  return (
    <div className="home">
        {isPending && <div> Loading Data...</div>}
        {error && <div> <h1>{error}</h1></div>}
        {address && <IPList address={address}/>}

    </div>
  )
}

export default Home