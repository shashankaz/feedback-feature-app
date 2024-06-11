import React, { useEffect, useState } from "react";
import "../../assets/styles/index.css";

const IssueLoggedIn = () => {
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
    return (
      <div className="submitted">
        Thanks for bringing the issue to our attention. <br /> We'll review it
        shortly and provide an update soon!
      </div>
    );
  }

  return (
    <div className="main-av">
      <div className="heading">
        <h1>
          Let us know about the <span>Issue</span> <br /> you are facing right
          now!
        </h1>
      </div>
      <div>
        <div className="section-main">
          <div className="section-1">
            <h2>Choose a section</h2>
            <select>
              <option value="Select" disabled>
                Select
              </option>
              <option value="Concept Cards">Concept Cards</option>
              <option value="Interview Questions">Interview Questions</option>
              <option value="Practice Questions">Practice Questions</option>
              <option value="Quizzes">Quizzes</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="section-2">
            <div className="section-3">
              <h2>
                Describe the issue in detail <span>*</span>
              </h2>
            </div>
            <div className="section-4">
              <div className="section-5">
                <textarea
                  value={message}
                  onChange={handleMessage}
                  placeholder="Write here..."
                  required
                ></textarea>
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

export default IssueLoggedIn;
