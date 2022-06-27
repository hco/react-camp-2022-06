import React from "react";
import { SimpleFunctionComponent } from "./GenericExample";

interface Props {
  comment: string;
}

const TimeEntryView: SimpleFunctionComponent<Props> = ({ comment }) => {
  return <div>{comment}</div>;
};

export default TimeEntryView;
