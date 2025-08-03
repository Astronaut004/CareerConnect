import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
// import {BrowserRoute} from <react-router-dom>  </react-router-dom>
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './component/Footer';
import About from './Pages/About'
import Applications from './Pages/Applications'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
// import JobDetails from './Pages/JobDetails'
import Login from './Pages/Login'
import Register from './Pages/Register';
import Index from './Pages/Index';
import Jobs from './Pages/CRUD/Jobs';
import JobsDel from './Pages/CRUD/JobsDel'
import JobsCreat from './Pages/CRUD/JobsCreat'
import JobsUpd from './Pages/CRUD/JobsUpd'
import NotFound from './Pages/NotFound';
function App() {
  const [count, setCount] = useState(0);

// About --> /about
// Applications -> /Application
// Contact --> /contact
// JobDetails  --> /job-details
// Jobs --> /job
// Login --> /login
// // NotFound --> 
// postjob --> /post-job
// profile --> /profile
// register --> /register


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element= {<Home/>} />
          <Route path='/about' element= {<About/>} />
          <Route path='/login' element= {<Login />} />
          <Route path='/register' element= {<Register />} />
          <Route path='/job' element={<Jobs  />}/>
          <Route path='/dashboard' element={<Index  />}/>
          <Route path='/jobs/create' element={<JobsCreat  />}/>
          <Route path='/jobs' element={<Jobs  />}/>
          <Route path='/jobs/update/:id' element={<JobsUpd />}/>
          <Route path='/jobs/delete/:id' element={<JobsDel  />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      {/* <Home /> */}
    </>
  )
}

export default App
