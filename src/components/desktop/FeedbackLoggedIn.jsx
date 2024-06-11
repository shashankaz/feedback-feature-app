import React, { useEffect, useState } from "react";
import "../../assets/styles/index.css";

const FeedbackLoggedIn = () => {
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
    if (message) {
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
                <div
                  className="section-7"
                  style={{
                    display: "flex",
                    gap: "8px",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <input
                    type="checkbox"
                    style={{
                      height: "20px",
                      width: "20px",
                      borderRadius: "4px",
                      padding: "8px",
                      border: "2px solid #808080",
                    }}
                  />
                  <h3
                    style={{
                      fontSize: "16px",
                      lineHeight: "16px",
                      fontWeight: "500",
                    }}
                  >
                    Send feedback anonymously
                  </h3>
                </div>
              </div>
              <div className="section-6">
                <button
                  onClick={onSubmit}
                  type="submit"
                  style={{
                    cursor: message ? "pointer" : "not-allowed",
                    backgroundColor: message
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

export default FeedbackLoggedIn;
