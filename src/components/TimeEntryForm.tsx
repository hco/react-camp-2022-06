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
    setInputValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Hinzufügen</button>
      <br />
      <label>
        Comment: <input type="text" onChange={handleChange} />
      </label>
      {inputValue}
    </form>
  );
};

export default TimeEntryForm;
