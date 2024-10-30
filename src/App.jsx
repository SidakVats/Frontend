import { Route, Routes } from "react-router-dom"

// import Home from "./Pages/Home"
// import About from "./Pages/About"
// import Contact from "./Pages/Contact"
// import Feedback from "./Pages/Feedback"
import Review from "./Pages/Review"
// import Feed from "./Pages/Feed"

function App() {
  
  return (
    <>
        <Routes>
          
          {/* <Route path="/home" element={<Home/>}/> */}
          {/* <Route path="/feedback" element={<Feedback/>}/> */}
          <Route path="/" element={<Review/>}/>
          {/* <Route path="/feed" element={<Feed/>}/> */}
          {/* <Route path="/about" element={<About/>}/> */}
          {/* <Route path="/contact" element={<Contact/>}/> */}
        </Routes> 
    </>
  )
}

export default App
