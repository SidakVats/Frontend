import { Route, Routes } from "react-router-dom"

import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Feedback from "./Pages/Feedback"
import Review from "./Pages/Review"

function App() {
  
  return (
    <>
        <Routes>
          
          <Route path="/" element={<Home/>}/>
          <Route path="/feedback" element={<Feedback/>}/>
          <Route path="/review" element={<Review/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes> 
    </>
  )
}

export default App
