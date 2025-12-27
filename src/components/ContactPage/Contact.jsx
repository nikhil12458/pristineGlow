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
      <form class="main-contact">
        <div class="contact-first">
          <div class="child-name">
            <label for="name">
              <span>Name</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>

          <div class="child-email">
            <label for="email">
              <span>Email</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
        </div>

        <div class="contact-second">
          <div class="child-phonenumber">
            <label for="phoneNumber">
              <span>Phone Number</span>
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div class="child-message">
            <label for="message">
              <span>Message</span>
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
        </div>
      </form>
    </>
  );
};

export default Contact;
