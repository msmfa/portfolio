import React from "react";

function ContactButton(props) {
  return (
    <>
      <div className="button-container">
        <a
          href="mailto:studio@michaelsydneymoore.com"
          rel="nofollow noopener noreferrer"
        >
          <button type="submit">{props.text}</button>
        </a>
      </div>
    </>
  );
}

export default ContactButton;
