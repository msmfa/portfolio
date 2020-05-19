import React from "react";
import CV from "../UTILS/CV-2020.pdf";

function NavBar() {
  return (
    <>
      <div className="nav-container">
        <ul>
          <li>
            <a href="#about-container">About</a>
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
            <a href={CV} target="_blank" rel="noopener noreferrer">
              CV
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
