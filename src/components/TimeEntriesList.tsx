import { TimeEntry } from "../domain/TimeEntry";
import TimeEntryView from "./TimeEntryView";

const timeEntries: TimeEntry[] = [
  {
    id: "1d5829",
    comment: "Listen rendern in react gelernt.",
    start: new Date(),
    end: new Date(),
  },
  {
    id: "1d5828",
    comment: "Daten Laden in react gelernt.",
    start: new Date(),
    end: new Date(),
  },
  {
    id: "1d5830",
    comment: "Hooks gelernt.",
    start: new Date(),
    end: new Date(),
  },
];
const TimeEntriesList: React.FunctionComponent = () => {
  return (
    <div>
      {timeEntries.map((timeEntry) => (
        <TimeEntryView key={timeEntry.id} timeEntry={timeEntry} />
      ))}
    </div>
  );
};

export default TimeEntriesList;
