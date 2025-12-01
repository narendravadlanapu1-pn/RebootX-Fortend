import React, { Component } from "react";
import Cookies from "js-cookie";
import "./index.css"; // your CSS file

class CreateJob extends Component {
  state = {
    title: "",
    company: "",
    location: "",
    type: "",
    desc: "",
    success: "",
    error: "",
    loading: false
  };

  onSubmitForm = async (event) => {
    event.preventDefault();
    this.setState({ loading: true, success: "", error: "" });

    const userRole = Cookies.get("role");

    // Only clients can post jobs
    if (userRole !== "client") {
      this.setState({
        error: "Only clients can post jobs.",
        loading: false
      });
      return;
    }

    const payload = {
      title: this.state.title,
      company: this.state.company,
      location: this.state.location,
      type: this.state.type,
      desc: this.state.desc,
    };

    try {
      const res = await fetch("https://rebootxbackend.onrender.com/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        this.setState({
          success: "Job posted successfully!",
          title: "",
          company: "",
          location: "",
          type: "",
          desc: "",
          loading: false
        });
      } else {
        this.setState({ error: data.errMsg, loading: false });
      }
    } catch (err) {
      this.setState({
        error: "Something went wrong. Try again.",
        loading: false
      });
    }
  };

  render() {
    return (
      <div className="createjob-wrapper">
        <div className="createjob-card">
          <h2 className="createjob-title">Post a New Job</h2>

          <form onSubmit={this.onSubmitForm}>
            
            {/* Job Title */}
            <div className="mb-3">
              <label className="form-label">Job Title</label>
              <input
                type="text"
                className="form-control"
                value={this.state.title}
                onChange={(e) => this.setState({ title: e.target.value })}
                required
              />
            </div>

            {/* Company */}
            <div className="mb-3">
              <label className="form-label">Company Name</label>
              <input
                type="text"
                className="form-control"
                value={this.state.company}
                onChange={(e) => this.setState({ company: e.target.value })}
                required
              />
            </div>

            {/* Location */}
            <div className="mb-3">
              <label className="form-label">Location</label>
              <input
                type="text"
                className="form-control"
                value={this.state.location}
                onChange={(e) => this.setState({ location: e.target.value })}
                required
              />
            </div>

            {/* Type */}
            <div className="mb-3">
              <label className="form-label">Job Type</label>
              <select
                className="form-select"
                value={this.state.type}
                onChange={(e) => this.setState({ type: e.target.value })}
                required
              >
                <option value="">Select Type</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Internship">Internship</option>
                <option value="Remote">Remote</option>
              </select>
            </div>

            {/* Description */}
            <div className="mb-3">
              <label className="form-label">Job Description</label>
              <textarea
                className="form-control"
                rows="5"
                value={this.state.desc}
                onChange={(e) => this.setState({ desc: e.target.value })}
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button className="post-btn" type="submit" disabled={this.state.loading}>
              {this.state.loading ? "Posting..." : "Post Job"}
            </button>

            {/* Alerts */}
            {this.state.success && <p className="success-msg">{this.state.success}</p>}
            {this.state.error && <p className="error-msg">{this.state.error}</p>}
          </form>
        </div>
      </div>
    );
  }
}

export default CreateJob;
