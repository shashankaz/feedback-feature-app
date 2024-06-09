import React, { useState } from "react";
import "../../assets/styles/index.css"
// import attach from "../../../assets/images/attach.svg";

const SuggestionNotLoggedIn = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="main-av">
      <div className="heading">
        <h1>
          Share your <span>Suggestions</span> with us <br /> for a chance to
          earn rewards!
        </h1>
      </div>
      <div>
        <div className="section-main">
          <div className="section-1">
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
          <div className="section-2">
            <div className="section-3">
              <h2>
                Describe the suggestion in detail <span>*</span>
              </h2>
            </div>
            <div className="section-4">
              <div className="section-5">
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
                <div className="section-7">
                  <h2>Enter your email to receive an update</h2>
                  <input type="email" placeholder="Enter your Email" />
                </div>
              </div>
              <div className="section-6">
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
  );
};

export default SuggestionNotLoggedIn;
