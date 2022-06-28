import TimeEntryForm from "./components/TimeEntryForm";
import TimeEntryView from "./components/TimeEntryView";
import { TimeEntry } from "./domain/TimeEntry";
import Counter from "./components/Counter";
import JavaScriptComponent from "./components/JavaScriptComponent";
import GithubRepoStats from "./components/GithubRepoStats";
import DynamicGithubRepoStats from "./components/DynamicGithubRepoStats";
import TimeEntriesList from "./components/TimeEntriesList";
import { useState } from "react";

function App() {
  const timeEntry: TimeEntry = {
    comment: "React gelernt",
    id: "",
    start: new Date(),
    end: new Date(),
  };

  const [timeEntries, setTimeEntries] = useState([
    {
      id: "1d5829",
      comment: "Listen rendern in react gelernt.",
      start: new Date(),
      end: new Date(),
    },
    {
      id: "1d5828",
      comment: "Daten Laden in react gelernt.",
      start: new Date(),
      end: new Date(),
    },
    {
      id: "1d5830",
      comment: "Hooks gelernt.",
      start: new Date(),
      end: new Date(),
    },
  ]);

  const handleCreateEntry = (timeEntry: TimeEntry) => {
    console.log({ timeEntry });
  };

  return (
    <>
      <h1>Ich bin Christian</h1>
      <TimeEntryView timeEntry={timeEntry} />
      <TimeEntryForm onCreateEntry={handleCreateEntry} />
      <Counter />
      <JavaScriptComponent />
      <GithubRepoStats repo="facebook/react" />
      <GithubRepoStats repo="angular/angular" />
      <GithubRepoStats repo="" />

      <hr />
      <DynamicGithubRepoStats />
      <TimeEntriesList timeEntries={timeEntries} />
    </>
  );
}

export default App;
