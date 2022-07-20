import { TimeEntry } from "../domain/TimeEntry";
import TimeEntryForm from "./TimeEntryForm";
import TimeEntriesList from "./TimeEntriesList";
import useTimeEntries from "../hooks/useTimeEntries";
import React from "react";

const DynamicTimeEntryList: React.FunctionComponent = () => {
  const { timeEntries, addTimeEntry } = useTimeEntries();

  const handleCreateEntry = (timeEntry: TimeEntry) => {
    addTimeEntry(timeEntry);
  };

  return (
    <>
      <TimeEntryForm onCreateEntry={handleCreateEntry} />
      <TimeEntriesList timeEntries={timeEntries} />
    </>
  );
};

export default DynamicTimeEntryList;
