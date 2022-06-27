import TimeEntryView from "./components/TimeEntryView";

function App() {
  return (
    <>
      <h1>Ich bin Christian</h1>
      <TimeEntryView
        timeEntry={{
          comment: "React gelernt",
          id: "",
          start: new Date(),
          end: new Date(),
        }}
      />
    </>
  );
}

export default App;
