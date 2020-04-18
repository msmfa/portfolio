import React, { useState } from "react";

export function ExpandButton(props) {
  const [buttonText, setButtonText] = useState({ text: "+" });

  const handle = () => {
    if (buttonText.text === "+") setButtonText({ text: "-" });
    else setButtonText({ text: "+" });
  };
  console.log(buttonText);
  return (
    <button
      className="expand-button"
      onClick={() => {
        handle();
        props.handleExpand();
      }}
      type="submit"
    >
      {buttonText.text}{" "}
    </button>
  );
}
