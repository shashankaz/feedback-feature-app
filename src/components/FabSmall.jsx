import React from "react";
import "./FabSmall.css";
import actionSmall from "../assets/images/actionSmall.svg";
import closeActionSmall from "../assets/images/closeActionSmall.svg";
import contactSmall from "../assets/images/contactSmall.svg";
import feedbackSmall from "../assets/images/feedbackSmall.svg";
import issueSmall from "../assets/images/issueSmall.svg";
import suggestionSmall from "../assets/images/suggestionSmall.svg";
import IssueLoggedIn from "./mobile/IssueLoggedIn";
import FeedbackLoggedIn from "./mobile/FeedbackLoggedIn";
import SuggestionLoggedIn from "./mobile/SuggestionLoggedIn";
import ContactLoggedIn from "./mobile/ContactLoggedIn";
import IssueNotLoggedIn from "./mobile/IssueNotLoggedIn";
import FeedbackNotLoggedIn from "./mobile/FeedbackNotLoggedIn";
import SuggestionNotLoggedIn from "./mobile/SuggestionNotLoggedIn";
import ContactNotLoggedIn from "./mobile/ContactNotLoggedIn";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleOpen,
  toggleNavHorizontal,
  showIssueForm,
  showFeedbackForm,
  showSuggestionForm,
  showContactForm,
} from "../redux/uiSlice";

const FabSmall = () => {
  const {
    open,
    navVertical,
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
    <div className="box">
      <div className="main-small">
        {navVertical && (
          <div className="vertical-small">
            <div
              id="issue-small"
              onClick={() => {
                handleVertical();
                handleIssueForm();
              }}
            >
              <p>Report an Issue</p>
              <button>
                <img src={issueSmall} alt="" />
              </button>
            </div>
            <div
              id="feedback-small"
              onClick={() => {
                handleVertical();
                handleFeedbackForm();
              }}
            >
              <p>Share Feedback</p>
              <button>
                <img src={feedbackSmall} alt="" />
              </button>
            </div>
            <div
              id="suggestion-small"
              onClick={() => {
                handleVertical();
                handleSuggestionForm();
              }}
            >
              <p>Give Suggestion</p>
              <button>
                <img src={suggestionSmall} alt="" />
              </button>
            </div>
            <div
              id="contact-small"
              onClick={() => {
                handleVertical();
                handleContactForm();
              }}
            >
              <p>Contact Us</p>
              <button>
                <img src={contactSmall} alt="" />
              </button>
            </div>
          </div>
        )}
        <div className="section-av-small">
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
        <div className="btn-small">
          <button className="fab-small" onClick={handleAction}>
            {open ? (
              <img src={closeActionSmall} alt="" />
            ) : (
              <img src={actionSmall} alt="" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FabSmall;
