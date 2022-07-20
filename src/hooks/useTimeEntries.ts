import { TimeEntry } from "../domain/TimeEntry";
import { useState } from "react";

const useTimeEntries = () => {
  const [timeEntries, setTimeEntries] = useState<TimeEntry[]>([]);

  const addTimeEntry = (timeEntry: TimeEntry) => {
    setTimeEntries((prevTimeEntries) => [...prevTimeEntries, timeEntry]);
  };

  return {
    timeEntries: timeEntries,
    addTimeEntry: addTimeEntry,
  };
};

export default useTimeEntries;
