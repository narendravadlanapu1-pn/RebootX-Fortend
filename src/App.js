import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/Aboutpage';
import Services from './components/Servicespage';
import Jobs from './components/Jobspage';
import Contact from './components/Contactpage';
import AITools from './components/AItoolspage';
import Registration from './components/Regsisterpage';
import Loginpage from './components/Loginpage';
import ProtectedRoute from './components/ProtectedRoute';
import ResumeBuilder from './components/ResumeBuilder';
import ApplyJob from './components/ApplyJob';
import ChatBot from './components/Aibot';

import DashboardLayout from './components/ClientDashboard/ClientNavbar';
import ClientHomepage from './components/ClientDashboard/ClinetHomepage';
import MyApplications from './components/ClientDashboard/ClientApplication';
import ClientProfile from './/components/ClientDashboard/ClinetProfile'
import CreateJob from './components/ClientDashboard/ClientJobPost'

function AppLayout() {
  const location = useLocation();
  const hideNavbar = ["/login", "/register"].includes(location.pathname);

  return (
    <>
      {!hideNavbar && <Navbar />}
      <ChatBot />

      <Routes>

        {/* PUBLIC ROUTES */}
        <Route path="/login" element={<Loginpage />} />
        <Route path="/register" element={<Registration />} />

        {/* PROTECTED ROUTES */}
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
        <Route path="/services" element={<ProtectedRoute><Services /></ProtectedRoute>} />
        <Route path="/jobs" element={<ProtectedRoute><Jobs /></ProtectedRoute>} />
        <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
        <Route path="/aiTools" element={<ProtectedRoute><AITools /></ProtectedRoute>} />
        <Route path="/resume-builder" element={<ProtectedRoute><ResumeBuilder /></ProtectedRoute>} />
        <Route path="/jobs/apply/:id" element={<ProtectedRoute><ApplyJob /></ProtectedRoute>} />

        {/* DASHBOARD ROUTES */}
       <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <DashboardLayout />
    </ProtectedRoute>
  }
>
  {/* Dashboard Home */}
  <Route index element={<ClientHomepage />} />

  {/* Nested routes */}
  <Route path="applications" element={<MyApplications />} />
  <Route path="profile" element={<ClientProfile />} />
  <Route path="post-job" element={<CreateJob />} />

</Route>

      </Routes>
    </>
  );
}


function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
