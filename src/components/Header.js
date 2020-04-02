import React from "react";

function Header() {
  return (
    <>
      <div className="header-container">
        <div className="header-top">Hi, my name is</div>
        <div className="header-middle">Michael Sydney Moore </div>
        <div className="header-bottom">
          I'm a software engineer from London.
        </div>
        <p className="header-text">
          I build high quality web based solutions to business and society's
          problems such as{" "}
          <a className="header-text-link" href="#proj">
            these.
          </a>{" "}
        </p>
      </div>
    </>
  );
}

export default Header;
