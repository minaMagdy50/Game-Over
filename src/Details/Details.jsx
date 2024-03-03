import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Triangle } from 'react-loader-spinner'
import { Link, useParams } from 'react-router-dom'

export default function Details() {
  let {id} =  useParams()
  const [loading, setLoading] = useState(false)
  const [games, setgames] = useState({})


  async function gamedetials(id) {
    setLoading(true)
    let {data} = await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/game` , {
      params: {
        id: id
      },
      headers: {
        'X-RapidAPI-Key': 'f1ac749c32mshe77aee2c7aafb5ap1ea227jsne1f523a3d7b5',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    })
    setgames(data)
    setLoading(false)

  }

useEffect(()=>{
    gamedetials(id)
} , [])
  


  return <>
  {loading ?  <div className='loading'>      
   <Triangle
  visible={true}
  height="200"
  width="200"
  color="#4fa94d"
  ariaLabel="triangle-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />

    </div> : <main className="py-5 text-dark">
         <div className="container py-5">
            <section className="row g-4 align-items-center" >
            <div className="col-md-4">
   <figure>
      <img src={games.thumbnail} className="w-100"  alt="details image" />
   </figure>
</div>
<div className="col-md-8 ">
<nav>
         <ul className="text-dark d-flex list-unstyled">
            <li className='mx-2 text-white'><Link to={'/'}>Home</Link></li>
            <li className='text-danger'>/{games.title}</li>
         </ul>
      </nav>
   <div>
      <h1 className='text-danger'>{games.title}</h1>

      <h3 className=' text-white'>About {games.title}</h3>
      <p className='text-light small'>{games.description}</p>
      {games.minimum_system_requirements?.graphics !== null && games.minimum_system_requirements !== undefined ?   <div className="row">
         <h5>minimum system requirements</h5>
         <div className="col-md-6 text-warning">
         <h6 className='text-warning'> graphics: {games.minimum_system_requirements?.graphics}</h6>
         <h6 className='text-warning'> memory: {games.minimum_system_requirements?.memory}</h6>
         <h6 className='text-warning'> storage: {games.minimum_system_requirements?.storage}</h6>
         </div>
         <div className="col-md-6 text-warning">
         <h6 className='text-warning'> processor: {games.minimum_system_requirements?.processor}</h6>
         <h6 className='text-warning'> os: {games.minimum_system_requirements?.os}</h6>
         </div>
      </div> : ''}
     
      
   </div>
</div>
            </section>
         </div>
      </main>
}

  

  
  </>
}
