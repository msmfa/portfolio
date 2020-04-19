import React, { useState, useEffect } from "react";
import Axios from "axios";
import { RepoText } from "./RepoText";
import { Title } from "./Title";
import { ExpandButton } from "./ExpandButton";
import ContentHeaders from "./ContentHeaders";

function MoreProjects() {
  const [display, setDisplay] = useState([]);
  const [shortRepos, setshortRepos] = useState([]);
  const [allRepos, setallRepos] = useState([]);
  const [buttonState, setButtonState] = useState(false);
  const NUM_OF_DISPLAY_REPOS = 4;

  useEffect(() => {
    async function getData() {
      const response = await Axios.get(
        `https://api.github.com/users/msmfa/repos`
      );

      const data = response.data.map((item) => item);
      const sortByUpdate = [...data].sort(
        (a, b) => +new Date(b.updated_at) - +new Date(a.updated_at)
      );
      const repos = [...sortByUpdate].slice(0, `${NUM_OF_DISPLAY_REPOS}`);
      const allRepos = [...sortByUpdate];
      setDisplay([...repos]);
      setshortRepos([...repos]);
      setallRepos([...allRepos.slice(0, 20)]);
    }

    getData();
  }, []);

  const handleExpand = () => {
    if (display.length === NUM_OF_DISPLAY_REPOS) {
      setDisplay([...allRepos]);
    } else setDisplay([...shortRepos]) && setButtonState(true);
  };
  return (
    <>
      <div className="repo-container">
        <Title />
        <Subtitle />
        <RepoText display={display} />
        <ExpandButton buttonState={buttonState} handleExpand={handleExpand} />
      </div>
    </>
  );
}

function Subtitle() {
  return (
    <h2 className="more-subtitle">
      This is an automatically updated feed of my latest projects built using
      the Github API.{" "}
      <a href="https://github.com/msmfa/github-repo-display">Source Code.</a>
    </h2>
  );
}

export default MoreProjects;
