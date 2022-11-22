import { useState,useEffect} from "react"

function useFetch(url,token=''){
    const [data,setData]=useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error,setError]=useState(null)


    useEffect(()=>{
        fetch(url,{
            headers:{
                "Authorization":`Bearer ${token}`
            }
        }).then(
            (res)=>{
                if(!res.ok){
                   throw Error("Could not fetch data from endpoint") 
                }
                return res.json()
            }).then(

                (data)=>{
                    console.log(data);
                    setData(data);
                    setIsPending(false);
                    setError(null);
                }
            ).catch(
                err=>{
                    setError(err.message)
                    setIsPending(false)
                }
            )},[url])

            return { data ,error, isPending}

            
}

export default useFetch;