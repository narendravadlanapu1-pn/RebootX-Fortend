import React, { Component } from "react";
import "./index.css";

class Jobs extends Component {
  state = {
    jobs: [],
    filteredJobs: [],
    loading: true,
    error: null,
    search: "",
    locationFilter: "",
    typeFilter: "",
  };

  componentDidMount() {
    this.fetchJobs();
  }

  fetchJobs = async () => {
    try {
      const response = await fetch("http://localhost:5000/jobs");
      if (!response.ok) throw new Error("Failed to fetch jobs");

      const jobs = await response.json();
      this.setState({ jobs, filteredJobs: jobs, loading: false });
    } catch (err) {
      this.setState({ error: err.message || "Error", loading: false });
    }
  };

  // FILTER FUNCTION
  applyFilters = () => {
    const { jobs, search, locationFilter, typeFilter } = this.state;

    const filtered = jobs.filter((job) => {
      return (
        job.title.toLowerCase().includes(search.toLowerCase()) &&
        (locationFilter ? job.location === locationFilter : true) &&
        (typeFilter ? job.type === typeFilter : true)
      );
    });

    this.setState({ filteredJobs: filtered });
  };

  onSearchChange = (e) => {
    this.setState({ search: e.target.value }, this.applyFilters);
  };

  onLocationChange = (e) => {
    this.setState({ locationFilter: e.target.value }, this.applyFilters);
  };

  onTypeChange = (e) => {
    this.setState({ typeFilter: e.target.value }, this.applyFilters);
  };

  // NEW APPLY BUTTON → Navigate to apply details page
  openApplyPage = (job) => {
    window.location.href = `/jobs/apply/${job._id}`;
  };

  render() {
    const { filteredJobs, loading, error, search } = this.state;

    return (
      <>
        {/* HERO SECTION */}
        <div className="jobs-hero">
          <h1 className="jobs-title">Latest Job Openings</h1>
          <p className="jobs-subtitle">
            Discover opportunities matched with your skills through AI-powered job recommendations.
          </p>
        </div>

        {/* FILTER SECTION */}
        <div className="jobs-filter-container">
          <input
            type="text"
            placeholder="Search job title..."
            className="search-input"
            value={search}
            onChange={this.onSearchChange}
          />

          <select className="filter-select" onChange={this.onLocationChange}>
            <option value="">All Locations</option>
            <option value="Hyderabad, India">Hyderabad</option>
            <option value="Bangalore, India">Bangalore</option>
            <option value="Chennai, India">Chennai</option>
            <option value="Mumbai, India">Mumbai</option>
            <option value="Remote">Remote</option>
          </select>

          <select className="filter-select" onChange={this.onTypeChange}>
            <option value="">All Types</option>
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Internship">Internship</option>
          </select>
        </div>

        {/* JOB LIST */}
        <div className="jobs-section">
          <div className="container">
            <div className="row mt-4">

              {loading && <p className="loding">Loading jobs...</p>}
              {error && <p style={{ color: "red" }}>Error: {error}</p>}

              {filteredJobs.map((job) => (
                <div className="col-lg-6 col-md-12" key={job._id}>
                  <div className="job-card">
                    <h3>{job.title}</h3>
                    <p className="job-company">{job.company}</p>
                    <p className="job-location">{job.location}</p>
                    <span className="job-type">{job.type}</span>
                    <p className="job-desc">{job.desc}</p>

                    <button
                      className="btn job-apply-btn"
                      onClick={() => this.openApplyPage(job)}
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}

              {!loading && filteredJobs.length === 0 && (
                <p>No matching jobs found.</p>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Jobs;
