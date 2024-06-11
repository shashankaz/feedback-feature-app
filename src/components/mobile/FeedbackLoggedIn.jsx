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
    return <div className="submitted-small">Thanks for your valuable feedback!</div>;
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
            Let us know your <span>Feedback</span> <br /> about us!
          </h1>
        </div>
        <div>
          <div className="section-small-main">
            <div className="section-small-2">
              <div className="section-small-4">
                <div className="section-small-5">
                  <textarea
                    value={message}
                    onChange={handleMessage}
                    placeholder="Write here..."
                    required
                  ></textarea>
                  <div
                    className="section-small-7"
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
                <div className="section-small-6">
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
    </main>
  );
};

export default FeedbackLoggedIn;
