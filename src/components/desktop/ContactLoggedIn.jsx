import React, { useEffect, useState } from "react";
import "../../assets/styles/index.css";

const ContactLoggedIn = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleMessage = (event) => {
    const inputText = event.target.value;
    const words = inputText.trim().split(/\s+/);
    if (words.length <= 1000) {
      setMessage(inputText);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (name && message) {
      setName("");
      setMessage("");
      setSubmitted(true);
    }
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [submitted]);

  if (submitted) {
    return (
      <div className="submitted">
        Thanks for reaching out to us! <br /> We will get back to you as soon as
        possible
      </div>
    );
  }

  return (
    <div className="contact">
      <div className="main-av">
        <div className="heading">
          <h1>
            Let us know what <span>your queries</span> <br /> are!
          </h1>
        </div>
        <div>
          <div className="section-main">
            <div className="section-2">
              <div className="section-4">
                <div className="section-5">
                  <div className="section-7">
                    <h2>Your Name</h2>
                    <input
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      type="text"
                      placeholder="Enter your Name"
                    />
                  </div>
                  <div className="section-7">
                    <h2>
                      What would you like to ask? <span>*</span>
                    </h2>
                    <textarea
                      value={message}
                      onChange={handleMessage}
                      placeholder="Write here..."
                      required
                    />
                  </div>
                </div>
                <div className="section-6">
                  <button
                    onClick={onSubmit}
                    type="submit"
                    style={{
                      cursor: name && message ? "pointer" : "not-allowed",
                      backgroundColor:
                        name && message
                          ? "rgba(15, 15, 15, 1)"
                          : "rgba(15, 15, 15, 0.6)",
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactLoggedIn;
