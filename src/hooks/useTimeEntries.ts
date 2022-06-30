import { TimeEntry } from "../domain/TimeEntry";
import { useState } from "react";

const useTimeEntries = (initialState: TimeEntry[] = []) => {
  const [timeEntries, setTimeEntries] = useState<TimeEntry[]>(initialState);

  return {
    timeEntries: timeEntries,
    addTimeEntry: (timeEntry: TimeEntry) => {
      setTimeEntries((prevTimeEntries) => [...prevTimeEntries, timeEntry]);
    },
    removeTimeEntry: (timeEntry: TimeEntry) => {
      setTimeEntries((prevTimeEntries) =>
        prevTimeEntries.filter((t) => t.id !== timeEntry.id)
      );
    },
  };
};

export default useTimeEntries;
