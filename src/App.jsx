import React from 'react'
import Login from './Login/Login'
import Rejester from './Rejester/Rejester'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './Home/Home'
import { Toaster } from 'react-hot-toast'
// import ProtectedRoute from './ProtectetRoute/ProtectetRoute'
import Action from './Action/Action'
import PermaDeath from './PermaDeath/PermaDeath'
import Pixel from './Pixel/Pixel'
import PVP from './PVP/PVP'
import Shooter from './Shooter/Shooter'
import SuperHero from './SuperHero/SuperHero'
import NotFound from './NotFound/NotFound'
import Details from './Details/Details'
import Sailing from './Saling/Saling'





let routers = createBrowserRouter([
  {path: '' , element: <Layout/> , children:[
    {index:true , element:<Home/> },
    {path:'action' , element:<Action/> },
    {path:'permadeath' , element:<PermaDeath/> },
    {path:'pixel' , element:<Pixel/> },
    {path:'pvp' , element:<PVP/> },
    {path:'saling' , element:<Sailing/> },
    {path:'shooter' , element:<Shooter/> },
    {path:'superhero' , element:<SuperHero/> },
    {path:'details/:id' , element:<Details/> },
    {path: 'login' , element:<Login/>},
    {path: 'register' , element:<Rejester/>},
    {path: '*' , element:<NotFound/>},
  ]}
])

export default function App() {
  return <>
  <Toaster></Toaster>
    <RouterProvider router={routers}></RouterProvider>
  </>
}
