import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";
import "./index.css";

class DashboardLayout extends Component {
  render() {
    return (
      <div className="dashboard-container">
        
        {/* LEFT SIDEBAR */}
       <div className="sidebar">
  <h2 className="sidebar-title">Dashboard</h2>

  <Link to="/dashboard" className="sidebar-link">Home</Link>
  <Link to="/dashboard/applications" className="sidebar-link">My Applications</Link>
  <Link to="/dashboard/profile" className="sidebar-link">My Profile</Link>
  <Link to="/dashboard/post-job" className="sidebar-link">Post Job</Link>
  <Link to="/" className="sidebar-link">Logout</Link>
</div>


        {/* RIGHT MAIN CONTENT */}
        <div className="dashboard-content">
          <Outlet />
        </div>
      </div>
    );
  }
}

export default DashboardLayout;
