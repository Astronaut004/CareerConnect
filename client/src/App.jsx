import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

// Components
import SaasNavbar from './component/SaasNavbar'
import ProfessionalFooter from './component/ProfessionalFooter'
import ScrollToTop from './component/ScrollToTop'

// Pages
import SaasLandingMotion from './Pages/SaasLandingMotion'
import ProfessionalLogin from './Pages/ProfessionalLogin'
import ProfessionalRegister from './Pages/ProfessionalRegister'
import NotFound from './Pages/NotFound'
import JobSeeker from './Pages/JobSeeker'

// Company Pages
import CompanyDashboard from './Pages/Company/CompanyDashboard'
import CompanyJobList from './Pages/Company/CompanyJobList'
import CompanySettings from './Pages/Company/CompanySettings'

// Job Seeker Pages
import JobsApply from './Pages/CRUD/JobsApply'
import JobsUpd from './Pages/CRUD/JobsUpd'
import JobsDel from './Pages/CRUD/JobsDel'
import JobsCreat from './Pages/CRUD/JobsCreat'
import Applications from './Pages/Applications'
import Index from './Pages/Index'

// Legacy Pages (kept for compatibility)
import About from './Pages/About'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Home from './Pages/Home'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <SaasNavbar />
        <main className="flex-grow">
          <Routes>
            {/* Public Routes */}
            <Route path='/' element={<SaasLandingMotion />} />
            <Route path='/login' element={<ProfessionalLogin />} />
            <Route path='/register' element={<ProfessionalRegister />} />

            {/* Company Routes */}
            <Route path='/company/dashboard' element={<CompanyDashboard />} />
            <Route path='/company/jobs' element={<CompanyJobList />} />
            <Route path='/company/settings' element={<CompanySettings />} />

            {/* Job Seeker Routes */}
            <Route path='/jobs' element={<JobSeeker />} />
            <Route path='/jobs/create' element={<JobsCreat />} />
            <Route path='/jobs/apply/:id' element={<JobsApply />} />
            <Route path='/jobs/update/:id' element={<JobsUpd />} />
            <Route path='/jobs/delete/:id' element={<JobsDel />} />
            <Route path='/applications' element={<Applications />} />
            <Route path='/profile' element={<Index />} />

            {/* Legacy Routes (for backward compatibility) */}
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/dashboard' element={<Index />} />

            {/* 404 */}
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
        <ProfessionalFooter />
      </div>
    </BrowserRouter>
  )
}

export default App
