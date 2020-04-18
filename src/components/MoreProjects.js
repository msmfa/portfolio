import React, { useState, useEffect } from "react";
import Axios from "axios";
import { RepoText } from "./RepoText";
import { Title } from "./Title";
import { ExpandButton } from "./ExpandButton";

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

  const handleExpand = () => {
    if (display.length === numOfDisplayRepos) {
      setDisplay([...allRepos]);
    } else setDisplay([...shortRepos]);
  };
  return (
    <>
      <div className="repo-container">
        <Title />
        <RepoText display={display} />
        <ExpandButton handleExpand={handleExpand} />
      </div>
    </>
  );
}

export default MoreProjects;
