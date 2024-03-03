import React from 'react'
import Login from './Login/Login'
import Rejester from './Rejester/Rejester'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './Home/Home'
import { Toaster } from 'react-hot-toast'
import ProtectedRoute from './ProtectetRoute/ProtectetRoute'
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
    {index:true , element:<ProtectedRoute><Home/></ProtectedRoute> },
    {path:'action' , element:<ProtectedRoute><Action/></ProtectedRoute> },
    {path:'permadeath' , element:<ProtectedRoute><PermaDeath/></ProtectedRoute> },
    {path:'pixel' , element:<ProtectedRoute><Pixel/></ProtectedRoute> },
    {path:'pvp' , element:<ProtectedRoute><PVP/></ProtectedRoute> },
    {path:'saling' , element:<ProtectedRoute><Sailing/></ProtectedRoute> },
    {path:'shooter' , element:<ProtectedRoute><Shooter/></ProtectedRoute> },
    {path:'superhero' , element:<ProtectedRoute><SuperHero/></ProtectedRoute> },
    {path:'details/:id' , element:<ProtectedRoute><Details/></ProtectedRoute> },
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
