import React from "react";

const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
  console.log(event.target.value);

  // @ts-expect-error
  console.log(event.target.userId);
};
