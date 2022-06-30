import { useEffect, useState } from "react";
import useGithubRepoStats from "../hooks/useGithubRepoStats";

type RepoInformation = {
  stargazers_count: number;
};

type Props = {
  repo: string;
};

const GithubRepoStats: React.FunctionComponent<Props> = (props) => {
  const { repoStats } = useGithubRepoStats(props.repo);

  if (!repoStats) {
    return <div>Loading…</div>;
  }

  return (
    <div>
      {props.repo} hat {repoStats.stargazers_count?.toLocaleString()} Sternchen!
    </div>
  );
};

export default GithubRepoStats;
