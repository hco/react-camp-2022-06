import { useEffect, useState } from "react";
import { useQuery } from "react-query";

type RepoInformation = {
  stargazers_count: number;
};

const useGithubRepoStatsReactQuery = (repoName: string) => {
  const { data, isLoading, error } = useQuery(
    "repoInformation",
    (): Promise<RepoInformation> => {
      return fetch("https://api.github.com/repos/" + repoName).then(
        (response) => response.json()
      );
    }
  );

  return {
    repoStats: data,
    loading: isLoading,
    error: error,
  };
};

export default useGithubRepoStatsReactQuery;
