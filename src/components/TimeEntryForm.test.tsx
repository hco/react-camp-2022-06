import TimeEntryForm from "./TimeEntryForm";
import { render, screen } from "@testing-library/react";

describe("<TimeEntryForm />", () => {
  test("it renders without crashing", () => {
    render(<TimeEntryForm onCreateEntry={() => {}} />);
  });

  test("it renders a button and an input field", () => {
    render(<TimeEntryForm onCreateEntry={() => {}} />);
  });
});
