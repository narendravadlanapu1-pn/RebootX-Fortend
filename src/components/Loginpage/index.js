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
    loading: false,
    showPassword: false,
  };

  onChangeUsername = (event) => {
    this.setState({ username: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  onSubmitFailure = (msg) => {
    this.setState({ errMsg: msg, loading: false });
  };

  onSubmitSuccess = (jwtToken, role, userId) => {
    Cookies.set("jwt_token", jwtToken, { expires: 7 });
    Cookies.set("role", role, { expires: 7 });
    Cookies.set("user_id", userId, { expires: 7 });

    const userRole = role.toLowerCase();

    if (userRole === "client") {
      this.setState({ redirectTo: "/dashboard" });
    } else {
      this.setState({ redirectTo: "/" });
    }
  };

  onSubmit = async (event) => {
    event.preventDefault();
    const { username, password } = this.state;

    this.setState({ loading: true, errMsg: "" });

    try {
      const response = await fetch("https://rebootxbackend.onrender.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
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
    const { username, password, errMsg, redirectTo, loading, showPassword } = this.state;

    const token = Cookies.get("jwt_token");
    const role = Cookies.get("role");

    // Auto redirect if user already logged in
    if (token) {
      if (role === "client") {
        return <Navigate to="/dashboard" replace />;
      }
      return <Navigate to="/" replace />;
    }

    // After successful login redirect
    if (redirectTo) {
      return <Navigate to={redirectTo} replace />;
    }

    return (
      <div className="bg-container">
        <form className="form-container" onSubmit={this.onSubmit}>
          <h1 className="title">Welcome Back</h1>

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

          <div className="input-group">
            <label className="nameLabel">Password</label>

            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                placeholder="Enter your password"
                onChange={this.onChangePassword}
                required
              />

              <button
                type="button"
                className="show-btn"
                onClick={() => this.setState({ showPassword: !showPassword })}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <button type="submit" className="loginBtn" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>

          {errMsg && <p className="errorMsg">{errMsg}</p>}

          <p className="AlreadyReg">
           <Link to="/register"> New user? Register</Link>
          </p>
        </form>
      </div>
    );
  }
}

export default Loginpage;
