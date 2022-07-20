import { TimeEntry } from "../domain/TimeEntry";

const useTimeEntries = () => {
  return {
    timeEntries: [],
    addTimeEntry: (timeEntry: TimeEntry) => {},
  };
};

export default useTimeEntries;
