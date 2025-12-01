import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

class AITools extends Component {
  render() {
    return (
      <>
        {/* HERO SECTION */}
        <div className="aitools-hero">
          <h1 className="aitools-title">AI Tools</h1>
          <p className="aitools-subtitle">
            Powerful AI tools designed to improve resumes, writing, job matching,
            content originality, and support your career growth.
          </p>
        </div>

        {/* TOOLS SECTION */}
        <div className="aitools-section">
          <div className="container">

            <h2 className="aitools-heading">Explore Our AI Tools</h2>
            <p className="aitools-text">
              RebootX offers a complete suite of modern AI tools for resume optimization,
              writing assistance, job matching, document generation, and plagiarism checking.
            </p>

            <div className="row mt-5">

              {/* AI Resume Builder */}
              <div className="col-lg-4 col-md-6">
                <div className="aitool-card">
                  <img
                    src="https://res.cloudinary.com/dyziadg5o/image/upload/v1763717139/illustration-of-search-with-ai-chip-icon-in-dark-color-and-white-background-vector_hmvcef.jpg"
                    className="aitool-image"
                    alt="Resume Builder"
                  />

                  <div className="aitool-content">
                    <h3>AI Resume Builder</h3>
                    <p>
                      Create a fully optimized, ATS-friendly resume with real-time AI suggestions.
                      Get formatting improvements, keyword optimization, and professional layout
                      enhancement for maximum visibility.
                    </p>
                <Link to="/aiTools/resume-builder" className="btn aitool-btn">Open Tool</Link>

                  </div>
                </div>
              </div>

              {/* Writing Assistant */}
              <div className="col-lg-4 col-md-6">
                <div className="aitool-card">
                  <img
                    src="https://res.cloudinary.com/dyziadg5o/image/upload/v1763719575/robot-writing-concept-of-ai-writing-assistant-ai-generated-photo_guprzk.jpg"
                    className="aitool-image"
                    alt="Writing Assistant"
                  />

                  <div className="aitool-content">
                    <h3>Writing Assistant</h3>
                    <p>
                      Generate emails, assignments, essays, reports, and content instantly.
                      Improve grammar, tone, clarity, and structure with AI-powered writing
                      assistance designed for students and professionals.
                    </p>
                    <button className="btn aitool-btn">Open Tool</button>
                  </div>
                </div>
              </div>

              {/* Job Match AI */}
              <div className="col-lg-4 col-md-6">
                <div className="aitool-card">
                  <img
                    src="https://res.cloudinary.com/dyziadg5o/image/upload/v1763719813/6721f16515ebc41d1fe6ad38_Let_20AI_20Find_20Jobs_xcumx7.svg"
                    className="aitool-image"
                    alt="Job Match AI"
                  />

                  <div className="aitool-content">
                    <h3>Job Match AI</h3>
                    <p>
                      Let AI analyze your skills and match them with the best job opportunities.
                      Get job-fit scores, missing skills insights, and role recommendations based
                      on your strengths and career goals.
                    </p>
                    <button className="btn aitool-btn">Open Tool</button>
                  </div>
                </div>
              </div>

              {/* Plagiarism Checker */}
              <div className="col-lg-4 col-md-6">
                <div className="aitool-card">
                  <img
                    src="https://res.cloudinary.com/dyziadg5o/image/upload/v1763719973/Product-36-600x600_fum8e6.webp"
                    className="aitool-image"
                    alt="Plagiarism Checker"
                  />

                  <div className="aitool-content">
                    <h3>Plagiarism Checker</h3>
                    <p>
                      Scan your assignments and documents for originality. Highlight duplicate content,
                      get rewrite suggestions, and ensure your work is 100% unique and ready to submit.
                    </p>
                    <button className="btn aitool-btn">Open Tool</button>
                  </div>
                </div>
              </div>

              {/* AI Chat Assistant */}
              <div className="col-lg-4 col-md-6">
                <div className="aitool-card">
                  <img
                    src="https://res.cloudinary.com/dyziadg5o/image/upload/v1763720108/chat-bot-icon-design-robot-600nw-2476207303_jd4ufj.jpg"
                    className="aitool-image"
                    alt="AI Chat Assistant"
                  />

                  <div className="aitool-content">
                    <h3>AI Chat Assistant</h3>
                    <p>
                      Get instant answers for coding, assignments, interview questions,
                      career doubts, and learning topics. Your personal AI tutor is available 24/7.
                    </p>
                    <button className="btn aitool-btn">Open Tool</button>
                  </div>
                </div>
              </div>

              {/* Document Generator */}
              <div className="col-lg-4 col-md-6">
                <div className="aitool-card">
                  <img
                    src="https://res.cloudinary.com/dyziadg5o/image/upload/v1763720301/be4d0c86-3a5b-4e17-ab04-9ca5307d9b24_z7o2x1.png"
                    className="aitool-image"
                    alt="Document Generator"
                  />

                  <div className="aitool-content">
                    <h3>Document Generator</h3>
                    <p>
                      Automatically generate reports, business letters, cover letters,
                      proposals, and formatted documents with AI-powered templates.
                    </p>
                    <button className="btn aitool-btn">Open Tool</button>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </>
    );
  }
}

export default AITools;
