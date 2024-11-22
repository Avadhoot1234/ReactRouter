import React from 'react'
import Navbar from './components/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFoundPage from './components/NotFoundPage'
import Jobs, { jobsLoader } from './pages/Jobs'

const App = () => {
  return (
    <div>
      <Navbar/>
      <div className='container'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Product/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/*' element={<NotFoundPage/>}/>
        <Route path='/jobs' element={<Jobs/>} />
      </Routes>
      </div>
    </div>
  )
}

export default App
