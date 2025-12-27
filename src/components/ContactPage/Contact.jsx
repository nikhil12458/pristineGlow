import React from "react";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <>

    <Helmet>
        <title>Contact Us | Pristine Glow</title>
        <meta
          name="description"
          content="Get in touch with Pristine Glow for inquiries, support, or feedback."
        />
      </Helmet>
    
      <h1 className="contact-heading">CONTACT</h1>
      <form className="main-contact">
        <div className="contact-first">
          <label className="child-name" htmlFor="name">
            <span>Name</span>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
            />
          </label>

          <label className="child-email" htmlFor="email">
            <span>Email</span>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </label>
        </div>

        <div className="contact-second">
          <label className="child-phonenumber" htmlFor="phoneNumber">
            <span>Phone Number</span>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Enter your phone number"
              required
            />
          </label>

          <label className="child-message" htmlFor="message">
            <span>Message</span>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              required
            />
          </label>
        </div>
      </form>
    </>
  );
};

export default Contact;
