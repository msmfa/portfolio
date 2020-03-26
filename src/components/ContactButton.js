import React from "react";

function ContactButton() {
  return (
    <>
      <div className="button-container">
        <a
          href="mailto:studio@michaelsydneymoore.com"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <button type="submit">Let's Talk</button>
        </a>
      </div>
    </>
  );
}

export default ContactButton;
