import React from "react";
import "../../assets/styles/index.css"

const FeedbackNotLoggedIn = () => {
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
                <textarea placeholder="Write here..." required></textarea>
                <div className="section-7">
                  <h2>
                    Enter your email to receive an update <span>*</span>
                  </h2>
                  <input type="email" placeholder="Enter your Email" required />
                </div>
              </div>
              <div className="section-6">
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackNotLoggedIn;
