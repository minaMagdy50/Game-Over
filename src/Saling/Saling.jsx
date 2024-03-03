import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Triangle } from 'react-loader-spinner'
import { Link } from 'react-router-dom'

export default function Sailing() {

  const [loading, setLoading] = useState(false)
  const [games, setgames] = useState([])


  async function getGames(){

    setLoading(true)
  let {data} = await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games` , {
    params: {
      category: 'sailing'
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
  getGames  ()
} , [])




const [post, setPost] = useState([])

function getPosts(e){
   setPost(games.filter( obj => obj.title.split(" ").slice(0,2).join(" ").toLowerCase().includes(e.target.value.toLowerCase())))
 }











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

    </div>  : <main className="container my-3 home">
         <h1 className="h4 mb-4 text-danger text-center">Top Free SAILING Games For PC And Browser In 2024!</h1>
         <div className="input-container mx-auto my-3">
  <input type="text" name="text" className="input" placeholder="search..."  onChange={ e => getPosts(e) } />
  <span className="icon"> 
    <svg width="19px" height="19px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="1" d="M14 5H20" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path opacity="1" d="M14 8H17" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path> <path opacity="1" d="M22 22L20 20" stroke="#000" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
  </span>
</div>

         <section className="position-relative">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4" id="gameData">

               {post.length > 0 ? post.map((game , index) =>  <div key={index} className="col">
              <Link to={`/details/${game.id}`} className='text-decoration-none'>
              <div className="card h-100 bg-dark shadow rounded-5" role="button" >
         <div className="card-body">

            <figure className="position-relative">
               <img className="card-img-top object-fit-cover h-100" src={game.thumbnail}  alt={game.title}  />
            </figure>

            <figcaption>

               <div className="hstack justify-content-between">
                  <h3 className="h5 "> {game.title} </h3>
                  <span className="badge text-bg-primary p-2">Free</span>
               </div>

               <p className="card-text small text-center mt-2 opacity-75 text-white">
                  {game.short_description}
               </p>

            </figcaption>
         </div>

         <footer className="card-footer small hstack justify-content-between">

            <span className="badge badge-color text-white">{game.genre}</span>
            <span className="badge badge-color text-white">{game.platform}</span>

         </footer>
      </div>
              
              </Link>
      
   </div>) : games.map((game , index) =>  <div key={index} className="col">
              <Link to={`/details/${game.id}`} className='text-decoration-none'>
              <div className="card h-100 bg-dark shadow rounded-5" role="button" >
         <div className="card-body">

            <figure className="position-relative">
               <img className="card-img-top object-fit-cover h-100" src={game.thumbnail}  alt={game.title} />
            </figure>

            <figcaption>

               <div className="hstack justify-content-between">
                  <h3 className="h5 "> {game.title} </h3>
                  <span className="badge text-bg-primary p-2">Free</span>
               </div>

               <p className="card-text small text-center mt-2 opacity-75 text-white">
                  {game.short_description}
               </p>

            </figcaption>
         </div>

         <footer className="card-footer small hstack justify-content-between">

            <span className="badge badge-color text-white">{game.genre}</span>
            <span className="badge badge-color text-white">{game.platform}</span>

         </footer>
      </div>
              
              </Link>
      
   </div>

)}
          
            </div>

      
         </section>
      </main>
  }

  </>
}
