import React from "react";
import Fab from "./components/Fab";
import FabSmall from "./components/FabSmall";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";

const App = () => {
  const { open } = useSelector((state) => state.ui);

  const issue = true;
  const feedback = true;
  const suggestion = true;
  const contact = true;

  return (
    <div>
      <div className={`main-body ${open ? "overlay" : ""}`}>
        <Navbar />
        <section>Feedback Feature App</section>
      </div>
      <Fab
        issueValidate={issue}
        feedbackValidate={feedback}
        suggestionValidate={suggestion}
        contactValidate={contact}
      />
      <FabSmall
        issueValidate={issue}
        feedbackValidate={feedback}
        suggestionValidate={suggestion}
        contactValidate={contact}
      />
    </div>
  );
};

export default App;
