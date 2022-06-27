import TimeEntryView from "./components/TimeEntryView";
import { TimeEntry } from "./domain/TimeEntry";

function App() {
  const timeEntry: TimeEntry = {
    comment: "React gelernt",
    id: "",
    start: new Date(),
    end: new Date(),
  };

  return (
    <>
      <h1>Ich bin Christian</h1>
      <TimeEntryView timeEntry={timeEntry} />
    </>
  );
}

export default App;
