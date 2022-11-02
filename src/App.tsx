import TimeEntryForm from "./components/TimeEntryForm";
import TimeEntriesList from "./components/TimeEntriesList";
import useTimeEntries from "./hooks/useTimeEntries";
import GithubRepoStats from "./components/GithubRepoStats";
import { QueryClient, QueryClientProvider } from "react-query";
import DynamicGithubRepoStats from "./components/DynamicGithubRepoStats";
import { ReactQueryDevtools } from "react-query/devtools";
import React from "react";
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
      <ReactQueryDevtools initialIsOpen={false} />
      <GithubRepoStats repo="facebook/react" />
      <GithubRepoStats repo="facebook/react" />
      <GithubRepoStats repo="facebook/react" />
      <DynamicGithubRepoStats />
      <TimeEntryForm onCreateEntry={addTimeEntry} />
      <TimeEntriesList timeEntries={timeEntries} />
    </QueryClientProvider>
  );
}

export default App;
