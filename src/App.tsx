import TimeEntryForm from "./components/TimeEntryForm";
import TimeEntryView from "./components/TimeEntryView";
import { TimeEntry } from "./domain/TimeEntry";
import Counter from "./components/Counter";
import JavaScriptComponent from "./components/JavaScriptComponent";
import GithubRepoStats from "./components/GithubRepoStats";
import DynamicGithubRepoStats from "./components/DynamicGithubRepoStats";
import TimeEntriesList from "./components/TimeEntriesList";

function App() {
  const timeEntry: TimeEntry = {
    comment: "React gelernt",
    id: "",
    start: new Date(),
    end: new Date(),
  };

  const handleEntryAdd = (timeEntry: TimeEntry) => {
    console.log("time entry from App", timeEntry);
  };

  return (
    <>
      <h1>Ich bin Christian</h1>
      <TimeEntryView timeEntry={timeEntry} />
      <TimeEntryForm onEntryAdd={handleEntryAdd} />
      <Counter />
      <JavaScriptComponent />
      <GithubRepoStats repo="facebook/react" />
      <GithubRepoStats repo="angular/angular" />
      <GithubRepoStats repo="" />

      <hr />
      <DynamicGithubRepoStats />
      <TimeEntriesList />
    </>
  );
}

export default App;
