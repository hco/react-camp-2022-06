import { useEffect, useState } from "react";

type RepoInformation = {
  stargazers_count: number;
};

const useGithubRepoStats = (repoName: string) => {
  const [repoInformation, setRepoInformation] = useState<RepoInformation>();

  useEffect(() => {
    fetch("https://api.github.com/repos/" + repoName)
      .then((response) => response.json())
      .then(setRepoInformation);
  }, [repoName]);

  return {
    repoStats: repoInformation,
    loading: true,
  };
};

export default useGithubRepoStats;
