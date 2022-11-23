
import IPList from "../components/IPList"
import { useState } from "react"
import useFetch from "../customHooks/useFetch"
import NavigationBar from "../components/NavigationBar"

const Home = () => {


    const {data: address,error,isPending} = useFetch('http://localhost:8000/api/addresses')


   
  return (
    
    <div className="home">
      <NavigationBar/>
        {isPending && <div> Loading Data...</div>}
        {error && <div> <h1>{error}</h1></div>}
        {address && <IPList address={address}/>}

    </div>
  )
}

export default Home