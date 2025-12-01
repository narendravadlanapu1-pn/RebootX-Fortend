import React, { Component } from 'react';
import './index.css';

class About extends Component {
  render() {
    return (
      <>

        {/* GRADIENT HEADER */}
        <div className="about-hero">
          <h1 className="about-hero-title">About RebootX</h1>
          <p className="about-hero-subtitle">
            Empowering careers with AI-driven solutions and modern technology.
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className="about-section">
          <div className="container">

            {/* MAIN TITLE CENTERED */}
            <h2 className="about-main-heading">Who We Are</h2>
            <p className="about-main-text">
              RebootX is a next-generation career acceleration and AI-powered job platform. 
              We help students, graduates, working professionals, and job seekers restart 
              their career journey with confidence by providing smart job recommendations, 
              resume optimization, AI chat support, skill development, and personalized 
              career tools.
            </p>

            <h2 className="about-main-heading">What Makes Us Different?</h2>
            <p className="about-main-text">
              We combine technology + human expertise to deliver real results. Our tools are 
              designed with modern AI algorithms that analyze job descriptions, resumes, skills, 
              hiring patterns, and market needs to connect candidates with the right jobs faster.
            </p>
               
             
            {/* IMAGE CENTERED */}
            <div className="text-center">
              <img
                src="https://res.cloudinary.com/dyziadg5o/image/upload/v1763697039/artificial-intelligence-handshake-illustration-svg-download-png-8737843_tspukq.png"
                className="about-image"
                alt="AI Illustration"
              />
            </div>  
            {/* THREE BOX FEATURES */}
            <div className="row text-center about-features">

              <div className="col-lg-4 col-md-6">
                <div className="feature-card">
                  <h3>AI Resume Builder</h3>
                  <p>Get instant resume improvements, ATS optimization, and real-time suggestions.</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="feature-card">
                  <h3>Smart Job Matching</h3>
                  <p>AI matches your skills with the best jobs in the industry instantly.</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="feature-card">
                  <h3>Project & Assignment Support</h3>
                  <p>We guide and deliver high-quality assignments and project solutions.</p>
                </div>
              </div>

            </div>


          </div>
        </div>
      </>
    );
  }
}

export default About;
