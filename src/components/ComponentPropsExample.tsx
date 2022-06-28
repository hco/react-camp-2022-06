import TimeEntryView from "./TimeEntryView";

type TimeEntryViewProps = React.ComponentProps<typeof TimeEntryView>;
type TimeEntry = TimeEntryViewProps["timeEntry"];

const ComponentPropsExample = () => {
  const timeEntry: TimeEntry = {
    id: "asd",
    comment: "sdajdas",
    start: new Date(),
    end: new Date(),
  };

  if (true || (false && (true || false))) {
  }

  return <TimeEntryView timeEntry={timeEntry} />;
};

export default ComponentPropsExample;
