import { Component } from "react";
import { Navigate } from "react-router-dom";
import "./index.css";

class Registration extends Component {
  state = {
    username: "",
    password: "",
    confirmPassword: "",
    role: "customer",
    errMsg: "",
    redirect: false,
  };

  onSubmitSuccess = () => {
    this.setState({ redirect: true });
  };

  onSubmitFailure = (msg) => {
    this.setState({ errMsg: msg });
  };

  onSubmitForm = async (event) => {
    event.preventDefault();

    const { username, password, confirmPassword, role } = this.state;

    if (password !== confirmPassword) {
      this.onSubmitFailure("Passwords do not match");
      return;
    }

    const userDetails = { username, password, role };

    const response = await fetch("https://rebootxbackend.onrender.com/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userDetails),
    });

    const data = await response.json();

    if (response.ok === true) {
      this.onSubmitSuccess();
    } else {
      this.onSubmitFailure(data.errMsg || "Registration failed");
    }
  };

  render() {
    const { errMsg, redirect } = this.state;

    if (redirect) {
      return <Navigate to="/login" replace />;
    }

    return (
      <div className="bg-container">
        <form className="form-container" onSubmit={this.onSubmitForm}>
          <h1 className="title">RebootX Registration</h1>

          {/* Username */}
          <div className="input-group">
            <label htmlFor="name" className="nameLabel">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your Name"
              onChange={(e) => this.setState({ username: e.target.value })}
              required
            />
          </div>

          {/* Password */}
          <div className="input-group">
            <label htmlFor="password" className="nameLabel">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your Password"
              onChange={(e) => this.setState({ password: e.target.value })}
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="input-group">
            <label htmlFor="confirm" className="nameLabel">Confirm Password</label>
            <input
              type="password"
              id="confirm"
              placeholder="Confirm your Password"
              onChange={(e) => this.setState({ confirmPassword: e.target.value })}
              required
            />
          </div>

          {/* Role Selection */}
          <div className="input-group">
            <label className="nameLabel">Select Role</label>
            <select
              onChange={(e) => this.setState({ role: e.target.value })}
              required
            >
              <option value="customer">Customer</option>
              <option value="client">Client</option>
            </select>
          </div>

          <button type="submit" className="Regbtn">Register</button>

          {errMsg && <p className="errorMsg">{errMsg}</p>}

          <p className="AlreadyReg">
            Already Registered? <a href="/login">Login</a>
          </p>
        </form>
      </div>
    );
  }
}

export default Registration;
