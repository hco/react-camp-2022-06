import { useEffect, useState } from "react";
import useGithubRepoStats from "../hooks/useGithubRepoStats";
import useGithubRepoStatsReactQuery from "../hooks/useGithubRepoStatsReactQuery";

type RepoInformation = {
  stargazers_count: number;
};

type Props = {
  repo: string;
};

const GithubRepoStats: React.FunctionComponent<Props> = (props) => {
  const { repoStats, loading, error } = useGithubRepoStatsReactQuery(
    props.repo
  );

  if (error) {
    if (error.message) {
      return <div>{error.message}</div>;
    }
    return <div>Unknown error.</div>;
  }

  if (loading || !repoStats) {
    return <div>Loading…</div>;
  }

  return (
    <div>
      {JSON.stringify(error)}
      {props.repo} hat {repoStats.stargazers_count?.toLocaleString()} Sternchen!
    </div>
  );
};

export default GithubRepoStats;
