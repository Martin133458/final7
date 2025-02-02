import React, { useState } from "react";
import "./ExpandableText.css";

const ExpandableText = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="expandable-text">
      <h2>{title}</h2>
      <p className={isExpanded ? "expanded" : "collapsed"}>
        {content}
      </p>
      <button onClick={toggleExpand}>
        {isExpanded ? "Свернуть" : "Показать полностью"}
      </button>
    </div>
  );
};

export default ExpandableText;
