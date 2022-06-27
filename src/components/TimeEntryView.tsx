interface Props {
  comment: string;
}

const TimeEntryView = ({ comment }: Props) => {
  return <div>{comment}</div>;
};

export default TimeEntryView;
