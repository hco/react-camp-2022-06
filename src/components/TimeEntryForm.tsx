import React, { useState } from "react";
import { TimeEntry } from "../domain/TimeEntry";

type Props = {
  onEntryAdd: (timeEntry: TimeEntry) => void;
};

const TimeEntryForm: React.FunctionComponent<Props> = () => {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log("Hello World");
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
