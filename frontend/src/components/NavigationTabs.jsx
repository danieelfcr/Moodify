import { useState } from "react";
import "./NavigationTabs.css";
import { Analyze } from "./Analyze";

export const NavigationTabs = () => {
  const [selected, setSelected] = useState("analyze");

  return (
    <>
      <div className="tabs-container">
        <button
          className={`tab-button ${selected === "analyze" ? "active" : ""}`}
          onClick={() => setSelected("analyze")}
        >
          Analize emotion
        </button>
        <button
          className={`tab-button ${selected === "history" ? "active" : ""}`}
          onClick={() => setSelected("history")}
        >
          History
        </button>
        <button
          className={`tab-button ${selected === "statistics" ? "active" : ""}`}
          onClick={() => setSelected("statistics")}
        >
          Statistics
        </button>
      </div>
      <div className="content-container">
        {selected === "analyze" && <div><Analyze/></div>}
        {selected === "history" && <div>Component</div>}
        {selected === "statistics" && <div>Component</div>}
      </div>
    </>
  );
};

export default NavigationTabs;