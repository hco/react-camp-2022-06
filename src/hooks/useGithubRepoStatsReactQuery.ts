import { useEffect, useState } from "react";
import { useQuery } from "react-query";

type RepoInformation = {
  stargazers_count: number;
};

const useGithubRepoStatsReactQuery = (repoName: string) => {
  const { data, isLoading, error } = useQuery(
    ["repoInformation", repoName],
    (): Promise<RepoInformation> => {
      return fetch(
        "https://api.github.com/repos/" + repoName + "?_ts" + Date.now()
      ).then(async (response) => {
        console.log(response);
        if (response.status >= 400) {
          throw await response.json();
        }
        return response.json();
      });
    }
  );

  return {
    repoStats: data,
    loading: isLoading,
    error: error as any,
  };
};

export default useGithubRepoStatsReactQuery;
