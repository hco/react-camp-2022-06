import { useEffect, useState } from "react";

type RepoInformation = {
  stargazers_count: number;
};
const GithubRepoStats: React.FunctionComponent = () => {
  const [repoInformation, setRepoInformation] = useState<RepoInformation>();

  if (repoInformation) {
    console.log(repoInformation);
  }
  useEffect(() => {
    fetch("https://api.github.com/repos/facebook/react")
      .then((response) => response.json())
      .then((value) => {
        console.log(value);
        setRepoInformation(value);
      });
  }, []);

  if (!repoInformation) {
    return <div>Loading…</div>;
  }

  return <div>Sternchen: {repoInformation.stargazers_count}</div>;
};

export default GithubRepoStats;
