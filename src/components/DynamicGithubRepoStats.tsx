import { useState } from "react";
import GithubRepoStats from "./GithubRepoStats";

const DynamicGithubRepoStats: React.FunctionComponent = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <form>
        <input onChange={(event) => setInputValue(event.target.value)} />
      </form>
      {inputValue}
      <GithubRepoStats repo={inputValue} />
    </div>
  );
};

export default DynamicGithubRepoStats;
