import React, { useState } from "react";
import { TimeEntry } from "../domain/TimeEntry";

type Props = {
  onCreateEntry: (timeEntry: TimeEntry) => void;
};

const TimeEntryForm: React.FunctionComponent<Props> = ({ onCreateEntry }) => {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log("Hello World");
    onCreateEntry({
      comment: inputValue,
      id: new Date().toISOString(),
      start: new Date(),
      end: new Date(),
    });
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(event.target.value);
    setInputValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Hinzufügen</button>
      <input type="text" onChange={handleChange} />
      {inputValue}
    </form>
  );
};

export default TimeEntryForm;
