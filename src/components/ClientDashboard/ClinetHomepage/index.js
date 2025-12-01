import React, { Component } from "react";
import "./index.css";

class ClientHomepage extends Component {
  state = {
    applications: [],
    loading: true,
    error: null,
  };

  componentDidMount() {
    this.fetchApplications();
  }

  fetchApplications = async () => {
    try {
      const clientId =
        localStorage.getItem("role") === "client" ? "client123" : null;

      const res = await fetch(
        `https://rebootxbackend.onrender.com/applications?clientId=${clientId}`
      );

      if (!res.ok) throw new Error("Failed to fetch applications");

      const applications = await res.json();
      this.setState({ applications, loading: false });
    } catch (err) {
      this.setState({ error: err.message, loading: false });
    }
  };

  render() {
    const { applications, loading, error } = this.state;

    if (loading) return <h2 className="text-center mt-4">Loading Dashboard...</h2>;
    if (error) return <h3 className="text-danger text-center">{error}</h3>;

    return (
      <div className="container py-4">

        <h1 className="text-center mb-4 fw-bold">Welcome to Your Dashboard</h1>

        {/* Dashboard Cards */}
        <div className="row g-4 mb-4">
          <div className="col-md-3">
            <div className="card shadow-sm p-3 text-center">
              <h5>Total Applications</h5>
              <h3 className="text-primary">{applications.length}</h3>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card shadow-sm p-3 text-center">
              <h5>Profile Status</h5>
              <h6 className="text-warning">Complete your profile</h6>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card shadow-sm p-3 text-center">
              <h5>AI Tools Used</h5>
              <h3 className="text-success">3</h3>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card shadow-sm p-3 text-center">
              <h5>Pending Approvals</h5>
              <h3 className="text-danger">
                {applications.filter((app) => app.status === "Pending").length}
              </h3>
            </div>
          </div>
        </div>

        {/* Applications Table */}
        <div className="card shadow-sm p-3">
          <h4 className="mb-3">Recent Student Applications</h4>

          <div className="table-responsive">
            <table className="table table-striped table-bordered">
              <thead className="table-primary">
                <tr>
                  <th>Student Name</th>
                  <th>Job Title</th>
                  <th>Status</th>
                  <th>Date Applied</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((app) => (
                  <tr key={app._id}>
                    <td>{app.name}</td>
                    <td>{app.jobTitle || "N/A"}</td>
                    <td>
                      <span
                        className={
                          app.status === "Pending"
                            ? "badge bg-warning text-dark"
                            : app.status === "Rejected"
                            ? "badge bg-danger"
                            : "badge bg-success"
                        }
                      >
                        {app.status}
                      </span>
                    </td>
                    <td>
                      {app.createdAt
                        ? new Date(app.createdAt).toLocaleDateString()
                        : "N/A"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    );
  }
}

export default ClientHomepage;
