import DynamicTimeEntryList from "./components/DynamicTimeEntryList";
import GithubRepoStatsWithHook from "./components/GithubRepoStatsWithHook";
import DynamicGithubRepoStats from "./components/DynamicGithubRepoStats";
import { QueryClient, QueryClientProvider } from "react-query";
import GithubRepoStats from "./components/GithubRepoStats";

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <GithubRepoStatsWithHook repo="facebook/react" />
      <GithubRepoStatsWithHook repo="facebook/react" />
      <GithubRepoStatsWithHook repo="facebook/react" />
      <hr />
      <DynamicTimeEntryList />
    </QueryClientProvider>
  );
}

export default App;
