import TimeEntryForm from "./components/TimeEntryForm";
import TimeEntryView from "./components/TimeEntryView";
import { TimeEntry } from "./domain/TimeEntry";
import Counter from "./components/Counter";
import JavaScriptComponent from "./components/JavaScriptComponent";

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
      <TimeEntryForm />
      <Counter />
      <JavaScriptComponent />
    </>
  );
}

export default App;
