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
import ClientProfile from './components/ClientDashboard/ClinetProfile';
import CreateJob from './components/ClientDashboard/ClientJobPost';

function AppLayout() {
  const location = useLocation();
  const hideNavbar = ["/login", "/register"].includes(location.pathname);

  return (
    <>
      {!hideNavbar && <Navbar />}
      <ChatBot />

      <Routes>

        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aiTools" element={<AITools />} />
        <Route path="/resume-builder" element={<ResumeBuilder />} />

        <Route path="/login" element={<Loginpage />} />
        <Route path="/register" element={<Registration />} />

        {/* APPLY JOB (Protected) */}
        <Route
          path="/jobs/apply/:id"
          element={
            <ProtectedRoute>
              <ApplyJob />
            </ProtectedRoute>
          }
        />

        {/* DASHBOARD ROUTES (Protected) */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<ClientHomepage />} />
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
