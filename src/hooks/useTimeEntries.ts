import { TimeEntry } from "../domain/TimeEntry";
import { useState } from "react";

const useTimeEntries = () => {
  const [timeEntries, setTimeEntries] = useState<TimeEntry[]>([]);

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
