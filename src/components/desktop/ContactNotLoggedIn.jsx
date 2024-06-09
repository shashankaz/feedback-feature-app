import React, { useState } from "react";
import "../../assets/styles/index.css"

const ContactNotLoggedIn = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="contact">
      <div className="main-av">
        <div className="heading">
          <h1>
            Let us know what <span>your queries</span> <br /> are!
          </h1>
        </div>
        <div>
          <div className="section-main">
            <div className="section-2">
              <div className="section-4">
                <div className="section-5">
                  <div className="section-7">
                    <h2>
                      Your Name <span>*</span>
                    </h2>
                    <input type="text" placeholder="Enter your Name" required />
                  </div>
                  <div className="section-7">
                    <h2>
                      Enter your Email <span>*</span>
                    </h2>
                    <input
                      type="email"
                      placeholder="Enter your Email"
                      required
                    />
                  </div>
                  <div className="section-7">
                    <h2>Enter your Mobile Number</h2>
                    <input type="number" placeholder="Enter your Number" />
                  </div>
                  <div className="section-7">
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
    </div>
  );
};

export default ContactNotLoggedIn;
