import React from "react";
import "./Fab.css";
import action from "../assets/images/action.svg";
import closeAction from "../assets/images/closeAction.svg";
import contact from "../assets/images/contact.svg";
import feedback from "../assets/images/feedback.svg";
import issue from "../assets/images/issue.svg";
import suggestion from "../assets/images/suggestion.svg";
import IssueLoggedIn from "./desktop/IssueLoggedIn";
import FeedbackLoggedIn from "./desktop/FeedbackLoggedIn";
import SuggestionLoggedIn from "./desktop/SuggestionLoggedIn";
import ContactLoggedIn from "./desktop/ContactLoggedIn";
import IssueNotLoggedIn from "./desktop/IssueNotLoggedIn";
import FeedbackNotLoggedIn from "./desktop/FeedbackNotLoggedIn";
import SuggestionNotLoggedIn from "./desktop/SuggestionNotLoggedIn";
import ContactNotLoggedIn from "./desktop/ContactNotLoggedIn";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleOpen,
  toggleNavHorizontal,
  showIssueForm,
  showFeedbackForm,
  showSuggestionForm,
  showContactForm,
} from "../redux/uiSlice";

const Fab = ({
  issueValidate,
  feedbackValidate,
  suggestionValidate,
  contactValidate,
}) => {
  const {
    open,
    navVertical,
    navHorizontal,
    issueForm,
    feedbackForm,
    suggestionForm,
    contactForm,
    isLoggedIn,
  } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const handleAction = () => {
    dispatch(toggleOpen());
  };

  const handleVertical = () => {
    dispatch(toggleNavHorizontal());
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
    <div className="main">
      {navVertical && (
        <div className="vertical">
          {issueValidate && (
            <div
              id="issue"
              onClick={() => {
                handleVertical();
                handleIssueForm();
              }}
            >
              <p>Report an Issue</p>
              <button>
                <img src={issue} alt="" />
              </button>
            </div>
          )}
          {feedbackValidate && (
            <div
              id="feedback"
              onClick={() => {
                handleVertical();
                handleFeedbackForm();
              }}
            >
              <p>Share Feedback</p>
              <button>
                <img src={feedback} alt="" />
              </button>
            </div>
          )}
          {suggestionValidate && (
            <div
              id="suggestion"
              onClick={() => {
                handleVertical();
                handleSuggestionForm();
              }}
            >
              <p>Give Suggestion</p>
              <button>
                <img src={suggestion} alt="" />
              </button>
            </div>
          )}
          {contactValidate && (
            <div
              id="contact"
              onClick={() => {
                handleVertical();
                handleContactForm();
              }}
            >
              <p>Contact Us</p>
              <button>
                <img src={contact} alt="" />
              </button>
            </div>
          )}
        </div>
      )}
      {navHorizontal && (
        <div className="horizontal">
          {contactValidate && (
            <button onClick={handleContactForm}>
              <img src={contact} alt="" />
            </button>
          )}
          {suggestionValidate && (
            <button onClick={handleSuggestionForm}>
              <img src={suggestion} alt="" />
            </button>
          )}
          {feedbackValidate && (
            <button onClick={handleFeedbackForm}>
              <img src={feedback} alt="" />
            </button>
          )}
          {issueValidate && (
            <button onClick={handleIssueForm}>
              <img src={issue} alt="" />
            </button>
          )}
        </div>
      )}
      <div className="section-av">
        {isLoggedIn
          ? issueForm && <IssueLoggedIn />
          : issueForm && <IssueNotLoggedIn />}
        {isLoggedIn
          ? feedbackForm && <FeedbackLoggedIn />
          : feedbackForm && <FeedbackNotLoggedIn />}
        {isLoggedIn
          ? suggestionForm && <SuggestionLoggedIn />
          : suggestionForm && <SuggestionNotLoggedIn />}
        {isLoggedIn
          ? contactForm && <ContactLoggedIn />
          : contactForm && <ContactNotLoggedIn />}
      </div>
      <div className="btn">
        <button className="fab" onClick={handleAction}>
          {open ? (
            <img src={closeAction} alt="" />
          ) : (
            <img src={action} alt="" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Fab;
