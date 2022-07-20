import DynamicTimeEntryList from "./components/DynamicTimeEntryList";
import GithubRepoStatsWithHook from "./components/GithubRepoStatsWithHook";
import DynamicGithubRepoStats from "./components/DynamicGithubRepoStats";

function App() {
  return (
    <>
      <DynamicGithubRepoStats />
      <hr />
      <DynamicTimeEntryList />
    </>
  );
}

export default App;
