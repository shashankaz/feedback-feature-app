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

const ContactNotLoggedIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleMessage = (event) => {
    const inputText = event.target.value;
    const words = inputText.trim().split(/\s+/);
    if (words.length <= 1000) {
      setMessage(inputText);
    }
  };

  const handlePhone = (e) => {
    const value = e.target.value;
    if (value.length <= 10) {
      setPhone(value);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (name && email && phone && message) {
      setName("");
      setEmail("");
      setPhone("");
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
        Thanks for reaching out to us! <br /> We will get back to you as soon as
        possible
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
      )}{" "}
      <div className="contact-small">
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
                      <h2>
                        Your Name <span>*</span>
                      </h2>
                      <input
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                        type="text"
                        placeholder="Enter your Name"
                        required
                      />
                    </div>
                    <div className="section-small-7">
                      <h2>
                        Enter your Email <span>*</span>
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
                    <div className="section-small-7">
                      <h2>Enter your Mobile Number</h2>
                      <input
                        value={phone}
                        onChange={handlePhone}
                        max={9999999999}
                        type="number"
                        placeholder="Enter your Number"
                      />
                    </div>
                    <div className="section-small-7">
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
                  <div className="section-small-6">
                    <button
                      onClick={onSubmit}
                      type="submit"
                      style={{
                        cursor:
                          name && email && message ? "pointer" : "not-allowed",
                        backgroundColor:
                          name && email && message
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
    </main>
  );
};

export default ContactNotLoggedIn;
