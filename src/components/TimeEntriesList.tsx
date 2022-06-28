import { TimeEntry } from "../domain/TimeEntry";
import TimeEntryView from "./TimeEntryView";

type Props = {
  timeEntries: TimeEntry[];
};

const TimeEntriesList: React.FunctionComponent<Props> = ({ timeEntries }) => {
  return (
    <div>
      {timeEntries.map((timeEntry) => (
        <TimeEntryView key={timeEntry.id} timeEntry={timeEntry} />
      ))}
    </div>
  );
};

export default TimeEntriesList;
