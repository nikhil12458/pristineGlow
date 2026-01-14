import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Button from "../button/Button";

const Contact = () => {
  useEffect(() => {
    document.querySelector(
      ".main"
    ).style.backgroundColor = `var(--background-color)`;
  }, []);
  return (
    <>
      <Helmet>
        <title>Contact Us | Pristine Glow</title>
        <meta
          name="description"
          content="Get in touch with Pristine Glow for inquiries, support, or feedback."
        />
      </Helmet>
      <div className="contact-page">
        <header className="contact-header">
          <h1>Contact</h1>
          <div className="underline"></div>
        </header>
        <section className="contact-body">
          <form action="https://api.web3forms.com/submit" method="POST">
            <input
              type="hidden"
              name="access_key"
              value="4c70dbb3-1966-4e5e-8ae1-4af6a5f40051"
            ></input>
            <input
              type="hidden"
              name="redirect"
              value={`${window.location.origin}/`}
            />
            <div className="form-top">
              <label>
                <span>Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </label>
              <label>
                <span>Email</span>
                <input
                  type="email"
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
                name="phone"
                placeholder="Enter your phone number"
                required
              />
            </label>
            <label className="form-bottom">
              <span>Message</span>
              <textarea
                name="message"
                placeholder="Enter your message"
                required
              ></textarea>
            </label>
            <Button type={"submit"} text={"Request Callback"} />
          </form>
        </section>
      </div>
    </>
  );
};

export default Contact;
