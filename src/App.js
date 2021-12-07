import React from 'react'
import Home from"./components/Home"
import {Routes,Route} from "react-router-dom"
import Front from './components/Front'
import More from './components/More'
import Marketing from './components/Marketing'
import Presentation from './components/Presentation'
import SocialMedia from './components/SocialMedia'
const App = () => {
 return(
 <>
 <Home/>
 <Routes>
   <Route exact path="/front" element={<Front/>}/>
   <Route exact path="/marketing" element={<Marketing/>}/>
   <Route exact path="/social" element={<SocialMedia/>}/>
   <Route exact path="/presentation" element={<Presentation/>}/>
   <Route exact path="/more" element={<More/>}/>
 </Routes>

 
  </>
  )
}

export default App

