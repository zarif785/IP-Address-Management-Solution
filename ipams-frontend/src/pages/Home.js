
import IPList from "../components/IPList"

import useFetch from "../customHooks/useFetch"

const Home = () => {


    const {data: address,error,isPending} = useFetch('http://localhost:8000/api/addresses')


  return (
    <div className="home">
        {isPending && <div> Loading Data...</div>}
        {error && <div> <h1>{error}</h1></div>}
        {address && <IPList address={address}/>}

    </div>
  )
}

export default Home