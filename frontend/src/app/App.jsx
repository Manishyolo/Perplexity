import React from 'react'
import { RouterProvider } from 'react-router'
import router from './appRoutes'
import { useAuth } from '../features/auth/hook/useAuth.js'
import { useEffect } from 'react'
const App = () => {

  const {handleGetme} = useAuth();
  
  useEffect(()=>{
    handleGetme()
  },[])


  return (
      <RouterProvider router={router}>

      </RouterProvider>
  )
}

export default App