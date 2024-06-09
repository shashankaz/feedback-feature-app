import React, { useState } from "react";
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

const ContactLoggedIn = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
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
      <div className="contact">
        <div className="main-av-small">
          <div className="heading-small">
            <h1>
              Let us know what <span>your queries</span> <br /> are!
            </h1>
          </div>
          <div>
            <div className="section-small-main">
              <div className="section-small-2">
                <div className="section-small-4">
                  <div className="section-small-5">
                    <div className="section-small-7">
                      <h2>Your Name</h2>
                      <input type="text" placeholder="Enter your Name" />
                    </div>
                    <div className="section-small-7">
                      <h2>
                        What would you like to ask? <span>*</span>
                      </h2>
                      <textarea
                        value={inputValue}
                        onChange={handleChange}
                        placeholder="Write here..."
                        required
                      />
                    </div>
                  </div>
                  <div className="section-small-6">
                    <button
                      style={{
                        cursor: inputValue ? "pointer" : "not-allowed",
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
    </main>
  );
};

export default ContactLoggedIn;
