import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const AboutContact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    clearState();

    emailjs
      .sendForm(
        "service_apmre9c",
        "template_gvuaipu",
        e.target,
        "XaFdOGTMSZD9aQqvS"
      )
      .then(
        (result) => {
          setSuccessMessage("Your message has been sent successfully.");
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div className="contact-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h3 className="section-heading">CONTACT INFO</h3>
              <p>Address: Kattankudy, Batticaloa</p>
              <p>Phone: 065 2242 242</p>
              <p>Email: info@example.com</p>
            </div>
            <div className="get-in-touch">
              <h3 className="section-heading">GET IN TOUCH</h3>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                        value={name}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                        value={email}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                    value={message}
                  ></textarea>
                </div>
                <div id="success">
                  <p>{successMessage}</p>
                </div>
                <button
                  disabled={successMessage}
                  type="submit"
                  className="btn btn-custom btn-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="location-container">
            <h3 className="section-heading">LOCATION</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14130.840975075269!2d85.32620695884457!3d27.69534911902795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a77520a339%3A0x4df14616bdef4f1c!2sSoftech%20Foundation%20Pvt.Ltd.!5e0!3m2!1sen!2snp!4v1726047867016!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{
                border: "none",
                maxWidth: "80%",
                maxHeight: "300px",
                borderRadius: "8px",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
