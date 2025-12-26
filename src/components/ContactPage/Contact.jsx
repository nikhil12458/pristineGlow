import React from "react";

const Contact = () => {
  return (
    <>
      <h1 className="contact-heading">CONTACT</h1>
      <form className="main-contact">
        <label className="contact-first">
          <div className="child-name">
            <span>Name</span>
            <input type="text" placeholder="Enter your name" name="name" />
          </div>
          <div className="child-email">
            <span>Email</span>
            <input type="text" placeholder="Enter your email" email="email" />
          </div>
        </label>
        <label className="contact-second">
          <div className="child-phonenumber">
            <span>Phone Number</span>
            <input
              type="text"
              placeholder="Enter your phone number"
              phoneNumber="phoneNumber"
            />
          </div>
          <div className="child-message">
            <span>Message</span>
            <textarea
              name="message"
              placeholder="Enter your message"
              message="message"
            ></textarea>
          </div>
        </label>
      </form>
    </>
  );
};

export default Contact;
