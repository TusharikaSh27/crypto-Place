import React, { useEffect, useState} from 'react'

const CryptoTracking = () => {

  const [cryptoData, setCryptoData]= useState([])
  const [search, setSearch]= useState("")

    const cryptoCurrency = async() =>{

        try{
              const response = await fetch("https://openapiv1.coinstats.app/coins?currency=INR",{ headers: {'X-API-KEY':"qMTOI/D1+MuzNDkcsFq0zE583buB0rsLherm9Ez+2uE="}
            })
              const data =await response.json();

              console.log(data);
              setCryptoData(data.result)

        }catch(err){
            console.log(err);
        }    
    }



const handleInput = (e) =>{
    setSearch(e.target.value)
}

    useEffect(()=>{
        cryptoCurrency()
    },[])



  return (
    <div className='container'> 
     <div>
        <h1>
           CryptoPlace:  Your CryptoCurrency Price Tracking Site
        </h1>
        <input type='text' placeholder='Search Here....' onChange={handleInput}/>
     </div>


     <div>
        <table>
            <thead>
                <tr>
                    <th>Rank </th>
                    <th>Name </th>
                    <th>Symbol </th>
                    <th>Market Cap </th>
                    <th>Price </th>
                    <th>Available Supply </th>
                      <th>Volume (24hrs)</th>
                    
                </tr>
            </thead>
            <tbody>

              {cryptoData.filter((value)=>{
                return value.name.toLowerCase().includes(search.toLowerCase())
              }).map((value,ind)=>{


                return <tr>
                    <td> {value.rank}</td>
                    <div className='icons'>
                <img src= {value.icon} alt="icon"/>

                 <td> {value.name}</td>
                    </div>
                    
                      <td> {value.symbol}</td>
                       <td> {value.marketCap.toFixed(2)}</td>
                        <td> {value.price}</td>
                         <td> {value.availableSupply}</td>
                          <td> {value.volume.toFixed(2)}</td>
                       

                </tr>
              })
              }


            </tbody>
        </table>






     </div>


      CryptoTracking



    </div>
  )
}

export default CryptoTracking
