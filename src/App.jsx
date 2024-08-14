import { useState } from 'react'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import About from './Component/About/About'
import Project from './Component/project/project'
import Contact from './Component/Contact/Contact'

const App = () => {
 
  return (
   <div>
     <Navbar/>
     <Hero />
     <About /> 
     <Project /> 
     <Contact />
   </div>
  )
}

export default App
