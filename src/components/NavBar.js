import React from "react";

function NavBar() {
  return (
    <>
      <div className="nav-container">
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#proj">Projects</a>
          </li>
          <li>
            {" "}
            <a
              href="mailto:studio@michaelsydneymoore.com"
              rel="nofollow noopener noreferrer"
            >
              Contact
            </a>
          </li>
          <li>
            <a href="#about">CV</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
