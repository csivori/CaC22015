import React, {useContext} from 'react'
import { ContextoDeLogin } from '../contexts/ContextoDeLogin'

const AppRouter = () => {
  
  const {estaLogueado, userId, uswername} = useContext(ContextoDeLogin)
  
  return (
      <>
    <div>AppRouter</div>
    <div>
      <h1>App</h1>
      <Home />
    </div>
    </>
  )
}

export default AppRouter