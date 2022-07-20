import { useEffect, useState } from "react";

type RepoInformation = {
  stargazers_count: number;
};

type Props = {
  repo: string;
};

const GithubRepoStats: React.FunctionComponent<Props> = (props) => {
  const { repoInformation } = useGithubRepoStats(props.repo);

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
