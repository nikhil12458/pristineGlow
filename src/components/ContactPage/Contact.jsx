import React from "react";

const Contact = () => {
  return (
    <>
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
