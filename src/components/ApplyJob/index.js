import React, { Component } from "react";
import { useParams } from "react-router-dom";
import "./index.css";

function ApplyJobWrapper() {
  const { id } = useParams();
  return <ApplyJob jobId={id} />;
}

class ApplyJob extends Component {
  state = {
    job: null,
    loading: true,
    error: null,
    name: "",
    email: "",
    resumeText: "",   // <- Using text, backend supports it
    success: "",
  };

  componentDidMount() {
    this.fetchJobDetails();
  }

  fetchJobDetails = async () => {
    try {
      const res = await fetch(`http://localhost:5000/jobs/${this.props.jobId}`);
      if (!res.ok) throw new Error("Job not found");

      const job = await res.json();
      this.setState({ job, loading: false });
    } catch (err) {
      this.setState({ error: err.message, loading: false });
    }
  };

  onSubmitForm = async (e) => {
    e.preventDefault();

    const { name, email, resumeText } = this.state;
    if (!name || !email)
      return this.setState({ error: "Name & Email required" });

    const payload = {
      jobId: this.props.jobId,
      name,
      email,
      resumeText,   // sending simple text (Google Drive link or short summary)
    };

    try {
      const res = await fetch("http://localhost:5000/jobs/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        this.setState({ success: "Application submitted!", error: "" });
      } else {
        this.setState({ error: data.errMsg });
      }
    } catch (err) {
      this.setState({ error: "Something went wrong" });
    }
  };

  render() {
    const { job, loading, error, success } = this.state;

    if (loading) return <h2>Loading...</h2>;
    if (error) return <h3 style={{ color: "red" }}>{error}</h3>;

    return (
      <div className="apply-container">
        <h1 className="apply-title">{job.title}</h1>
        <p className="apply-company">{job.company}</p>
        <p className="apply-location">{job.location}</p>
        <p className="apply-desc">{job.desc}</p>

        <h2 className="apply-form-title">Apply for This Job</h2>

        <form className="apply-form" onSubmit={this.onSubmitForm}>
          <input
            type="text"
            placeholder="Enter Name"
            onChange={(e) => this.setState({ name: e.target.value })}
            required
          />

          <input
            type="email"
            placeholder="Enter Email"
            onChange={(e) => this.setState({ email: e.target.value })}
            required
          />

          {/* Resume Link Instead of File Upload */}
          <input
            type="text"
            placeholder="Paste Resume Drive Link (or short summary)"
            onChange={(e) => this.setState({ resumeText: e.target.value })}
            required
          />

          <button className="apply-btn" type="submit">
            Submit Application
          </button>

          {success && <p className="success-msg">{success}</p>}
        </form>
      </div>
    );
  }
}

export default ApplyJobWrapper;
