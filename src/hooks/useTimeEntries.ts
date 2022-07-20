import { TimeEntry } from "../domain/TimeEntry";
import { useState } from "react";

export type UseTimeEntriesReturnValue = {
  timeEntries: TimeEntry[];
  addTimeEntry: (timeEntry: TimeEntry) => void;
};

const useTimeEntries = (): UseTimeEntriesReturnValue => {
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
