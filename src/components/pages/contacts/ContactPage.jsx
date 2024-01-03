import { useState } from "react";
import "./contact.css";
import Swal from "sweetalert2";

const ContactPage = () => {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    message: "",
  });

  const contactChangeFunc = (e) => {
    setContactInfo({
      ...contactInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleContactForm = (e) => {
    e.preventDefault();
    if (
      contactInfo.name.trim() === "" ||
      contactInfo.email.trim() === "" ||
      contactInfo.message.trim() === ""
    ) {
      return Swal.fire({
        title: "Enter Valid info",
        icon: "warning",
      });
    } else {
      e.target.name.value = "";
      e.target.email.value = "";
      e.target.message.value = "";
      return Swal.fire({
        title: "Successfully submited",
        icon: "success",
      });
    }
  };

  return (
    <div>
      <div className="contactContainer">
        <div className="contactForm">
          <h2>Contact Us</h2>
          <form onSubmit={handleContactForm}>
            <div className="formGroup">
              <label className="label" htmlFor="name">
                Name:
              </label>
              <input
                className="input"
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                onChange={contactChangeFunc}
                value={contactInfo.name}
              />
            </div>

            <div className="formGroup">
              <label className="label" htmlFor="email">
                Email:
              </label>
              <input
                className="input"
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                onChange={contactChangeFunc}
                value={contactInfo.email}
              />
            </div>

            <div className="formGroup">
              <label className="label" htmlFor="message">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Your Message"
                onChange={contactChangeFunc}
                value={contactInfo.message}
              ></textarea>
            </div>

            <button className="button" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
