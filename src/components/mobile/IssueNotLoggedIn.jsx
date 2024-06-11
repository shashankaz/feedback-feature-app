import React, { useEffect, useState } from "react";
import "../../assets/styles/index.css";
import closeActionSmall from "../../assets/images/closeActionSmall.svg";
import contactSmall from "../../assets/images/contactSmall.svg";
import feedbackSmall from "../../assets/images/feedbackSmall.svg";
import issueSmall from "../../assets/images/issueSmall.svg";
import suggestionSmall from "../../assets/images/suggestionSmall.svg";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleOpen,
  showIssueForm,
  showFeedbackForm,
  showSuggestionForm,
  showContactForm,
} from "../../redux/uiSlice";

const IssueNotLoggedIn = () => {
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

  const { navHorizontal } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const handleAction = () => {
    dispatch(toggleOpen());
  };

  const handleIssueForm = () => {
    dispatch(showIssueForm());
  };

  const handleFeedbackForm = () => {
    dispatch(showFeedbackForm());
  };

  const handleSuggestionForm = () => {
    dispatch(showSuggestionForm());
  };

  const handleContactForm = () => {
    dispatch(showContactForm());
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
      <div className="submitted-small">
        Thanks for bringing the issue to our attention. <br /> We'll review it
        shortly and provide an update soon!
      </div>
    );
  }

  return (
    <main>
      {navHorizontal && (
        <div className="horizontal-small">
          <button onClick={handleContactForm}>
            <img src={contactSmall} alt="" />
          </button>
          <button onClick={handleSuggestionForm}>
            <img src={suggestionSmall} alt="" />
          </button>
          <button onClick={handleFeedbackForm}>
            <img src={feedbackSmall} alt="" />
          </button>
          <button onClick={handleIssueForm}>
            <img src={issueSmall} alt="" />
          </button>
          <button onClick={handleAction}>
            <img src={closeActionSmall} alt="" />
          </button>
        </div>
      )}
      <div className="main-av-small">
        <div className="heading-small">
          <h1>
            Let us know about the <span>Issue</span> <br /> you are facing right
            now!
          </h1>
        </div>
        <div>
          <div className="section-small-main">
            <div className="section-small-1">
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
            <div className="section-small-2">
              <div className="section-small-3">
                <h2>
                  Describe the issue in detail <span>*</span>
                </h2>
              </div>
              <div className="section-small-4">
                <div className="section-small-5">
                  <textarea
                    value={message}
                    onChange={handleMessage}
                    placeholder="Write here..."
                    required
                  ></textarea>
                  <div className="section-small-7">
                    <h2>Enter your email to receive an update</h2>
                    <input
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      type="email"
                      placeholder="Enter your Email"
                    />
                  </div>
                </div>
                <div className="section-small-6">
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
    </main>
  );
};

export default IssueNotLoggedIn;
