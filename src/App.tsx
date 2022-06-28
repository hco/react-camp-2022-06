import TimeEntryForm from "./components/TimeEntryForm";
import { TimeEntry } from "./domain/TimeEntry";
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
      <TimeEntryForm onCreateEntry={handleCreateEntry} />
      <TimeEntriesList timeEntries={timeEntries} />
    </>
  );
}

export default App;
