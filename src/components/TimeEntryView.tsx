import React from "react";

interface Props {
  comment: string;
}

const TimeEntryView: React.FunctionComponent<Props> = ({
  comment,
}: Props): React.ReactElement => {
  return <div>{comment}</div>;
};

export default TimeEntryView;
