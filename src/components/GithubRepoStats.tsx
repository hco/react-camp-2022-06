import { useEffect, useState } from "react";
import useGithubRepoStats from "../hooks/useGithubRepoStats";

type RepoInformation = {
  stargazers_count: number;
};

type Props = {
  repo: string;
};

const GithubRepoStats: React.FunctionComponent<Props> = (props) => {
  const { repoStats, loading } = useGithubRepoStats(props.repo);

  if (loading || !repoStats) {
    return <div>Loading…</div>;
  }

  return (
    <div>
      {props.repo} hat {repoStats.stargazers_count.toLocaleString()} Sternchen!
    </div>
  );
};

export default GithubRepoStats;
