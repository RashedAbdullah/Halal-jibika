import './contact.css'

const ContactPage = () => {
  return (
    <div>
      <div className="contactContainer">
        <div className="contactForm">
          <h2>Contact Us</h2>
          <form>
            <div className="formGroup">
              <label className='label' htmlFor="name">Name:</label>
              <input
              className='input'
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
              />
            </div>

            <div className="formGroup">
              <label className='label' htmlFor="email">Email:</label>
              <input
              className='input'
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
              />
            </div>

            <div className="formGroup">
              <label className='label' htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Your Message"
              ></textarea>
            </div>

            <button className='button' type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
