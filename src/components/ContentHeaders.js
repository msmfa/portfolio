import React from "react";

export default function ContentHeaders(props) {
  return (
    <div>
      <div id={props.id} className="container">
        {props.text}
      </div>
    </div>
  );
}
