import React from "react";

const Contact = () => {
  return (
    <div>
      <section className="main-contact">
        <div className="heading">
          <h1>CONTACT</h1>
        </div>
        <div className="firstdiv">
          <div>
            <h2>Name</h2>
            <input type="text" placeholder="Enter your name" name="name" />
          </div>
          <div>
            <h2>Email</h2>
            <input type="text" placeholder="Enter your email" email="email" />
          </div>
        </div>
        <div className="seconddiv">
          <div>
            <h2>Pone Number</h2>
            <input
              type="number"
              placeholder="Enter your phone number"
              phoneNumber="phoneNumer"
            />
          </div>
          <div>
            <h2>Message</h2>
            <input
              type="text"
              placeholder="Enter your message"
              message="message"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;