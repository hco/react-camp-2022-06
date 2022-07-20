import { useQuery, useQueryClient } from "react-query";

const useGithubRepoStatsWithReactQuery = (repo: string) => {
  const { data, isLoading, refetch } = useQuery(["repoStats", repo], () => {
    return fetch("https://api.github.com/repos/" + repo).then((response) =>
      response.json()
    );
  });

  return {
    repoInformation: data,
    loading: isLoading,
  };
};

export default useGithubRepoStatsWithReactQuery;
