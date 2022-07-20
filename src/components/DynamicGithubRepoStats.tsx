import { useState } from "react";
import GithubRepoStats from "./GithubRepoStats";
import GithubRepoStatsWithHook from "./GithubRepoStatsWithHook";

const DynamicGithubRepoStats: React.FunctionComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [repo, setRepo] = useState("");

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setRepo(inputValue);
        }}
      >
        <button type="submit">Absenden</button>
        <input onChange={(event) => setInputValue(event.target.value)} />
      </form>
      <GithubRepoStatsWithHook repo={repo} />
    </div>
  );
};

export default DynamicGithubRepoStats;
