import { Component } from "react";
import Cookies from "js-cookie";
import { Navigate, Link } from "react-router-dom";
import "./index.css";

class Loginpage extends Component {
  state = {
    username: "",
    password: "",
    errMsg: "",
    redirectTo: "",
  };

  onChangeUsername = (event) => {
    this.setState({ username: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  onSubmitFailure = (msg) => {
    this.setState({ errMsg: msg });
  };

  onSubmitSuccess = (jwtToken, role, userId) => {
    // Save everything to cookies
    Cookies.set("jwt_token", jwtToken, { expires: 7 });
    Cookies.set("role", role, { expires: 7 });
    Cookies.set("user_id", userId, { expires: 7 });

    // Redirect based on role
    if (role === "client") {
      this.setState({ redirectTo: "/dashboard" });
    } else {
      this.setState({ redirectTo: "/" });
    }
  };

  onSubmit = async (event) => {
    event.preventDefault();

    const { username, password } = this.state;

    const userDetails = { username, password };

    try {
      const response = await fetch("https://rebootxbackend.onrender.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userDetails),
      });

      const data = await response.json();

      if (response.ok) {
        this.onSubmitSuccess(data.jwtToken, data.role, data.userId);
      } else {
        this.onSubmitFailure(data.errMsg || "Invalid credentials");
      }
    } catch (error) {
      this.onSubmitFailure("Server error. Try again later.");
    }
  };

  render() {
    const { username, password, errMsg, redirectTo } = this.state;

    if (redirectTo) {
      return <Navigate to={redirectTo} replace />;
    }

    return (
      <div className="bg-container">
        <form className="form-container" onSubmit={this.onSubmit}>
          <h1 className="title">Welcome Back</h1>

          {/* Username */}
          <div className="input-group">
            <label className="nameLabel">Username</label>
            <input
              type="text"
              value={username}
              placeholder="Enter your username"
              onChange={this.onChangeUsername}
              required
            />
          </div>

          {/* Password */}
          <div className="input-group">
            <label className="nameLabel">Password</label>
            <input
              type="password"
              value={password}
              placeholder="Enter your password"
              onChange={this.onChangePassword}
              required
            />
          </div>

          <button type="submit" className="loginBtn">Login</button>

          {errMsg && <p className="errorMsg">{errMsg}</p>}

          <p className="AlreadyReg">
            New user? <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
    );
  }
}

export default Loginpage;
