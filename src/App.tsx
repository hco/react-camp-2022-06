import TimeEntryForm from "./components/TimeEntryForm";
import TimeEntriesList from "./components/TimeEntriesList";
import useTimeEntries from "./hooks/useTimeEntries";
import GithubRepoStats from "./components/GithubRepoStats";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  const { timeEntries, addTimeEntry } = useTimeEntries([
    {
      id: "1d5829",
      comment: "Listen rendern in react gelernt.",
      start: new Date(),
      end: new Date(),
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <GithubRepoStats repo="facebook/react" />
      <TimeEntryForm onCreateEntry={addTimeEntry} />
      <TimeEntriesList timeEntries={timeEntries} />
    </QueryClientProvider>
  );
}

export default App;
