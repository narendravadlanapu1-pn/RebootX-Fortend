import React, { Component } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './index.css';

class Navbar extends Component {
  state = { logout: false };

  handleLogout = () => {
    Cookies.remove('jwt_token');
    this.setState({ logout: true });
  };

  render() {
    const { logout } = this.state;

    // Redirect user to login page after logout
    if (logout) {
      return <Navigate to="/login" replace />;
    }

    const token = Cookies.get('jwt_token');

    return (
      <nav className="navbar navbar-expand-lg navbar-dark rebootx-nav">
        <div className="container">

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu */}
          <div className="collapse navbar-collapse" id="navbarNav">

            <ul className="navbar-nav mx-lg-auto d-lg-flex flex-lg-row justify-content-lg-center">

              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/services">Services</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/jobs">Jobs</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" to="/aiTools">AI Tools</Link>
              </li>

              {/* SHOW LOGOUT BUTTON ONLY IF LOGGED IN */}
              {token && (
                <li className="nav-item">
                  <button
                    className="logout-btn"
                    onClick={this.handleLogout}
                  >
                    Logout
                  </button>
                </li>
              )}

            </ul>
          </div>

        </div>
      </nav>
    );
  }
}

export default Navbar;
