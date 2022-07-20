import { useEffect, useState } from "react";

type RepoInformation = {
  stargazers_count: number;
};

const useGithubRepoStats = (repo: string) => {
  const [repoInformation, setRepoInformation] = useState<RepoInformation>();

  useEffect(() => {
    setRepoInformation(undefined);
    fetch("https://api.github.com/repos/" + repo)
      .then((response) => response.json())
      // .then((value) => setRepoInformation(value));
      .then(setRepoInformation); // Das gleiche wie die vorherige Zeile
  }, [repo]);

  return {
    repoInformation: repoInformation,
    loading: !repoInformation,
  };
};

export default useGithubRepoStats;
