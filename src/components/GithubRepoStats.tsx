import { useEffect, useState } from "react";

type RepoInformation = {
  stargazers_count: number;
};

type Props = {
  repo: string;
};

const GithubRepoStats: React.FunctionComponent<Props> = (props) => {
  const [repoInformation, setRepoInformation] = useState<RepoInformation>();

  useEffect(() => {
    fetch("https://api.github.com/repos/" + props.repo)
      .then((response) => response.json())
      // .then((value) => setRepoInformation(value));
      .then(setRepoInformation); // Das gleiche wie die vorherige Zeile
  }, [props.repo]);

  if (!repoInformation) {
    return <div>Loading…</div>;
  }

  return (
    <div>
      {props.repo} hat {repoInformation.stargazers_count?.toLocaleString()}{" "}
      Sternchen!
    </div>
  );
};

export default GithubRepoStats;
