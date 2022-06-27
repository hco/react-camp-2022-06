import TimeEntryView from "./components/TimeEntryView";
import { ComponentProps } from "react";

type TimeEntryViewProps = ComponentProps<typeof TimeEntryView>;

function App() {
  const timeEntry: TimeEntryViewProps["timeEntry"] = {
    comment: "React lernen",
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
