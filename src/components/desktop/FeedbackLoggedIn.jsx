import React from "react";
import "../../assets/styles/index.css"

const FeedbackLoggedIn = () => {
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
                <div
                  className="section-7"
                  style={{ display: "flex", gap: "8px", flexDirection: "row",alignItems:"center" }}
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

export default FeedbackLoggedIn;
