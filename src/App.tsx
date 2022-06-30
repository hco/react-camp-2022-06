import TimeEntryForm from "./components/TimeEntryForm";
import TimeEntriesList from "./components/TimeEntriesList";
import useTimeEntries from "./hooks/useTimeEntries";

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
    <>
      <TimeEntryForm onCreateEntry={addTimeEntry} />
      <TimeEntriesList timeEntries={timeEntries} />
    </>
  );
}

export default App;
