import useGithubRepoStatsWithReactQuery from "../hooks/useGithubRepoStatsWithReactQuery";

type RepoInformation = {
  stargazers_count: number;
};

type Props = {
  repo: string;
};

const GithubRepoStatsWithHook: React.FunctionComponent<Props> = (props) => {
  const { repoInformation, loading } = useGithubRepoStatsWithReactQuery(
    props.repo
  );

  if (loading || !repoInformation) {
    return <div>Loading…</div>;
  }

  return (
    <div>
      {props.repo} hat {repoInformation.stargazers_count?.toLocaleString()}{" "}
      Sternchen!
    </div>
  );
};

export default GithubRepoStatsWithHook;
