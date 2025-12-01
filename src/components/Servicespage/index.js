import React, { Component } from 'react';
import './index.css';

class Services extends Component {
  render() {
    return (
      <>
        {/* HERO SECTION */}
        <div className="services-hero">
          <h1 className="services-title">Our Services</h1>
          <p className="services-subtitle">
            AI-powered solutions designed to help you grow, get hired, and build your career.
          </p>
        </div>

        {/* SERVICES SECTION */}
        <div className="services-section">
          <div className="container">

            <h2 className="services-heading">What We Offer</h2>
            <p className="services-text">
              RebootX provides a complete suite of career, hiring, assignment, and software
              development services powered by modern AI technology. Our mission is to help
              students, job seekers, and professionals accelerate their growth with tools
              that are accurate, fast, and industry-focused.
            </p>

            <div className="row mt-5 text-center">

              {/* AI RESUME BUILDER */}
              <div className="col-lg-4 col-md-6">
                <div className="service-card">
                  <h3>AI Resume Builder</h3>
                  <p>
                    Instantly create ATS-optimized resumes with AI suggestions, skill analysis,
                    formatting, and improvement guidance.
                  </p>
                </div>
              </div>

              {/* SMART JOB MATCHING */}
              <div className="col-lg-4 col-md-6">
                <div className="service-card">
                  <h3>Smart Job Matching</h3>
                  <p>
                    Our AI scans job descriptions and matches your profile with the most suitable
                    job opportunities in real time.
                  </p>
                </div>
              </div>

              {/* AI WRITING & CHATBOT */}
              <div className="col-lg-4 col-md-6">
                <div className="service-card">
                  <h3>AI Writing & Chat Assistant</h3>
                  <p>
                    Get help with emails, assignments, content drafting, explanations, and
                    career guidance through our AI chatbot.
                  </p>
                </div>
              </div>

              {/* ASSIGNMENT DELIVERY */}
              <div className="col-lg-4 col-md-6">
                <div className="service-card">
                  <h3>Project & Assignment Delivery</h3>
                  <p>
                    We deliver high-quality academic and IT assignments handled by a
                    verified India-based expert team.
                  </p>
                </div>
              </div>

              {/* SOFTWARE DEVELOPMENT */}
              <div className="col-lg-4 col-md-6">
                <div className="service-card">
                  <h3>Software & AI Development</h3>
                  <p>
                    Full-stack development, automation, custom AI tools, and business software
                    solutions tailored to your needs.
                  </p>
                </div>
              </div>

              {/* HIRING PLATFORM */}
              <div className="col-lg-4 col-md-6">
                <div className="service-card">
                  <h3>AI Hiring Platform</h3>
                  <p>
                    Employers can post jobs, filter candidates, and hire talent faster with
                    AI-powered screening and dashboards.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Services;
