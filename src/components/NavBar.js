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
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
