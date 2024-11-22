import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFoundPage = () => {
    const navigate=useNavigate();
  return (


    <div>
      <h2>404||Page not found</h2>
      <button onClick={()=>navigate('/')}>Go to Home page</button>
    </div>
  )
}

export default NotFoundPage
