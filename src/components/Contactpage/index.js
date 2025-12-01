import React, { Component } from 'react';
import './index.css';

class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: ""
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been submitted! We will contact you soon.");
  };

  render() {
    return (
      <>
        {/* HERO SECTION */}
        <div className="contact-hero">
          <h1 className="contact-title">Get in Touch</h1>
          <p className="contact-subtitle">
            We're here to help you with jobs, AI tools, projects, and career guidance.
          </p>
        </div>

        {/* CONTACT SECTION */}
        <div className="contact-section">
          <div className="container">
            <div className="row">

              {/* LEFT SIDE: CONTACT INFO */}
              <div className="col-lg-5">
                <div className="contact-info-box">
                  <h2>Contact Information</h2>
                  <p>Have questions? Need help? Reach out anytime.</p>

                  <p className="contact-label">Email:</p>
                  <p className="contact-value">support@rebootx.com</p>

                  <p className="contact-label">Phone:</p>
                  <p className="contact-value">+91 98765 43210</p>

                  <p className="contact-label">Address:</p>
                  <p className="contact-value">Hyderabad, Telangana, India</p>
                </div>
              </div>

              {/* RIGHT SIDE: CONTACT FORM */}
              <div className="col-lg-7">
                <div className="contact-form-box">
                  <h2>Send Us a Message</h2>

                  <form onSubmit={this.handleSubmit}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="contact-input"
                      value={this.state.name}
                      onChange={this.handleChange}
                      required
                    />

                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="contact-input"
                      value={this.state.email}
                      onChange={this.handleChange}
                      required
                    />

                    <textarea
                      name="message"
                      placeholder="Your Message"
                      rows="5"
                      className="contact-textarea"
                      value={this.state.message}
                      onChange={this.handleChange}
                      required
                    ></textarea>

                    <button className="btn contact-btn">Submit</button>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>

      </>
    );
  }
}

export default Contact;
