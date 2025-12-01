import React, { Component } from "react";
import "./index.css";

class MyApplications extends Component {
  state = { applications: [], loading: true };

  async componentDidMount() {
    try {
      const res = await fetch("http://localhost:5000/my-applications");
      const data = await res.json();
      this.setState({ applications: data, loading: false });
    } catch (error) {
      console.error("Error fetching applications:", error);
      this.setState({ loading: false });
    }
  }

  render() {
    const { applications, loading } = this.state;

    return (
      <div className="application-container">
        <h1 className="app-title">My Applications</h1>

        {loading ? (
          <p className="loading">Loading...</p>
        ) : applications.length === 0 ? (
          <p className="empty">No applications found.</p>
        ) : (
          <div className="apps-list">
            {applications.map((a) => (
              <div className="app-card" key={a._id}>
                <h3>{a.jobId?.title || "No Title"}</h3>
                <p><strong>Name:</strong> {a.name}</p>
                <p><strong>Email:</strong> {a.email}</p>
                <p><strong>Applied On:</strong> {new Date(a.createdAt).toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default MyApplications;
