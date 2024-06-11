import React, { useEffect, useState } from "react";
import "../../assets/styles/index.css";

const FeedbackNotLoggedIn = () => {
  const [email, setEmail] = useState("");
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
    if (email && message) {
      setEmail("");
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
    return <div className="submitted">Thanks for your valuable feedback!</div>;
  }

  return (
    <div className="main-av">
      <div className="heading">
        <h1>
          Let us know your <span>Feedback</span> <br /> about us!
        </h1>
      </div>
      <div>
        <div className="section-main">
          <div className="section-2">
            <div className="section-4">
              <div className="section-5">
                <textarea
                  value={message}
                  onChange={handleMessage}
                  placeholder="Write here..."
                  required
                ></textarea>
                <div className="section-7">
                  <h2>
                    Enter your email to receive an update <span>*</span>
                  </h2>
                  <input
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    type="email"
                    placeholder="Enter your Email"
                    required
                  />
                </div>
              </div>
              <div className="section-6">
                <button
                  onClick={onSubmit}
                  type="submit"
                  style={{
                    cursor: email && message ? "pointer" : "not-allowed",
                    backgroundColor:
                      email && message
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
  );
};

export default FeedbackNotLoggedIn;
