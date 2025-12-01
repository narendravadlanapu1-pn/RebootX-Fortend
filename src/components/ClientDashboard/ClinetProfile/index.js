import React, { Component } from "react";
import Cookies from "js-cookie";
import "./index.css";

class ClientProfile extends Component {
  state = {
    user: null,
    loading: true
  };

  async componentDidMount() {
    const userId = Cookies.get("user_id");

    if (!userId) {
      this.setState({ loading: false });
      return;
    }

    try {
      const res = await fetch(`https://rebootxbackend.onrender.com/user/${userId}`);
      const data = await res.json();
      this.setState({ user: data, loading: false });
    } catch (error) {
      console.error("Error loading profile:", error);
      this.setState({ loading: false });
    }
  }

  render() {
    const { user, loading } = this.state;

    return (
      <div className="profile-container">
        <h1 className="profile-title">My Profile</h1>

        {loading ? (
          <p className="loading">Loading Profile...</p>
        ) : !user ? (
          <p className="empty">Profile not found.</p>
        ) : (
          <div className="profile-card">
            <img
              src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.username}`}
              alt="profile avatar"
              className="profile-avatar"
            />

            <h2 className="profile-name">{user.username}</h2>
            <p className="profile-email"><strong>Email:</strong> {user.email || "Not Provided"}</p>
            <p className="profile-date">
              <strong>Joined:</strong> {new Date(user.createdAt).toLocaleDateString()}
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default ClientProfile;
