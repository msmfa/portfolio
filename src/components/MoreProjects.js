import React, { useState, useEffect } from "react";
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { timeSince } from "./timeSince";

function MoreProjects() {
  const [display, setDisplay] = useState([]);
  const [shortRepos, setshortRepos] = useState([]);
  const [allRepos, setallRepos] = useState([]);
  const numOfDisplayRepos = 6;

  useEffect(() => {
    async function getData() {
      const response = await Axios.get(
        `https://api.github.com/users/msmfa/repos`
      );

      const data = response.data.map((item) => item);
      const sortByUpdate = [...data].sort(
        (a, b) => +new Date(b.updated_at) - +new Date(a.updated_at)
      );
      const repos = [...sortByUpdate].slice(0, `${numOfDisplayRepos}`);
      const allRepos = [...sortByUpdate];

      setDisplay([...repos]);
      setshortRepos([...repos]);
      setallRepos([...allRepos]);
    }

    getData();
  }, []);
  // Wrapped in useEffect to stop it re rendering

  const handleExpand = () => {
    if (display.length === numOfDisplayRepos) {
      setDisplay([...allRepos]);
    } else setDisplay([...shortRepos]);
  };
  return (
    <>
      <div className="repo-container">
        {display.map((item) => (
          <div className="repo" key={uuidv4()}>
            <li className="repo-title" key={uuidv4()}>
              {item.name}
            </li>
            <li className="repo-description" key={uuidv4()}>
              {item.description}
            </li>
            <li className="github-link" key={uuidv4()}>
              <a
                key={uuidv4()}
                href={item.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github Link
              </a>
            </li>

            <li key={uuidv4()}>{timeSince(new Date(item.updated_at))}</li>
          </div>
        ))}
        <button onClick={handleExpand} type="submit">
          Expand{" "}
        </button>
      </div>
    </>
  );
}
export default MoreProjects;
