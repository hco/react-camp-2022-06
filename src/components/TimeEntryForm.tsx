import React from "react";

const TimeEntryForm: React.FunctionComponent = () => {
  console.log("Hallo Konsole!");
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log("Hello World");
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Hinzufügen</button>
    </form>
  );
};

export default TimeEntryForm;
