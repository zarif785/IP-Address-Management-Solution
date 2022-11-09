import {useState, useEffect} from 'react'


const Test = () => {

  const [currency,setCurrency]= useState(null)
  useEffect(()=>{
    fetch('http://currency-converter.rubai.me/api/currency/get').then(
        (res)=>{
            return res.json()
        }
    ).then((data)=>{
        console.log(data,data)
        setCurrency(data.data)
    })
  },[])
  return (
    <div className="test">
        {
            currency.map(function(addr){
                return(
                    <div className="ip-preview" key={addr.id}>
                        <h2>{addr.currency_short}</h2>
                        <p>{addr.currency_long}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Test