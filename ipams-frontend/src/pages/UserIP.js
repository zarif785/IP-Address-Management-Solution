import React from 'react'
import NavigationBar from '../components/NavigationBar'
import useFetch from '../customHooks/useFetch'
import IPList from '../components/IPList'

const UserIP = () => {

    
    const id = localStorage.getItem('user_id')
    const {data: address,error,isPending} = useFetch('http://localhost:8000/api/myaddress',localStorage.getItem('auth_token') )

  return (
    <>
        <NavigationBar/>
        <div className='show'>
            <h2> My IP Addresses </h2>
            {isPending && <div> Loading Data...</div>}
            {error && <div> <h1>{error}</h1></div>}
            {address && <IPList address={address} canEdit={true}/>}
            
        </div>
    </>
  )
}

export default UserIP