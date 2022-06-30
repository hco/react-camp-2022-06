import { useEffect, useState } from "react";

type RepoInformation = {
  stargazers_count: number;
};

const useGithubRepoStats = (repoName: string) => {
  const [repoInformation, setRepoInformation] = useState<RepoInformation>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>();

  useEffect(() => {
    setRepoInformation(undefined);
    setLoading(true);

    fetch("https://api.github.com/repos/" + repoName)
      .then((response) => response.json())
      .then((repoInformation) => {
        setLoading(false);
        setRepoInformation(repoInformation);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, [repoName]);

  return {
    repoStats: repoInformation,
    loading: loading,
    error: error,
  };
};

export default useGithubRepoStats;
