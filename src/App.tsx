import TimeEntryForm from "./components/TimeEntryForm";
import TimeEntriesList from "./components/TimeEntriesList";
import useTimeEntries from "./hooks/useTimeEntries";

function App() {
  const { timeEntries, addTimeEntry } = useTimeEntries();

  return (
    <>
      <TimeEntryForm onCreateEntry={addTimeEntry} />
      <TimeEntriesList timeEntries={timeEntries} />
    </>
  );
}

export default App;
