import React from "react";

function Header() {
  return (
    <>
      <div className="header-container">
        <h1 className="header-top">Hi, my name is</h1>
        <h2 className="header-middle">Michael Sydney Moore </h2>
        <h3 className="header-bottom">I'm a software engineer from London.</h3>
        <p className="header-text">
          I build high quality web based solutions to business and society's
          problems such as{" "}
          <a className="header-text-link" href="#proj">
            these.
          </a>
        </p>
      </div>
    </>
  );
}

export default Header;
