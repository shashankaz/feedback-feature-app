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

const SuggestionLoggedIn = () => {
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
      <div className="main-av-small">
        <div className="heading-small">
          <h1>
            Share your <span>Suggestions</span> with us <br /> for a chance to
            earn rewards!
          </h1>
        </div>
        <div>
          <div className="section-small-main" style={{ gap: "24px" }}>
            <div className="section-small-1">
              <h2>Choose a section</h2>
              <select>
                <option value="Select">Select</option>
                <option value="Concept Cards">Concept Cards</option>
                <option value="Interview Questions">Interview Questions</option>
                <option value="Practice Questions">Practice Questions</option>
                <option value="Quizzes">Quizzes</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className="section-small-2">
              <div className="section-small-3">
                <h2>
                  Describe the suggestion in detail <span>*</span>
                </h2>
              </div>
              <div className="section-small-4">
                <div className="section-small-5">
                  <div className="text-area">
                    <textarea
                      value={inputValue}
                      onChange={handleChange}
                      placeholder="Write here..."
                      required
                    ></textarea>
                  </div>
                  {/* <div className="attach">
                  <img src={attach} alt="" />
                  <h3>Attach</h3>
                </div> */}
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
    </main>
  );
};

export default SuggestionLoggedIn;
