import React from "react";

const Contact = () => {
  return (
    <div className="contact-page">
      <header className="contact-header">
        <h1>Contact</h1>
        <div className="underline"></div>
      </header>
      <section className="contact-body">
        <form action="">
          <div className="form-top">
            <label>
              <span>Name</span>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
              />
            </label>
            <label>
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
          <label className="form-center">
            <span>Phone Number</span>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              required
            />
          </label>
          <label className="form-bottom">
            <span>Message</span>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              required
            ></textarea>
          </label>
          <button>Request callback</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
