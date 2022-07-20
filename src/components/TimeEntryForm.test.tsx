import TimeEntryForm from "./TimeEntryForm";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("<TimeEntryForm />", () => {
  test("it renders without crashing", () => {
    render(<TimeEntryForm onCreateEntry={() => {}} />);
  });

  test("it renders a button and an input field", () => {
    render(<TimeEntryForm onCreateEntry={() => {}} />);

    screen.getByRole("button", {
      name: /hinzufügen/i,
    });

    screen.getByRole("textbox");
  });

  test("after typing into the input field, the preview should show the content of the input field", () => {
    render(<TimeEntryForm onCreateEntry={() => {}} />);

    userEvent.type(screen.getByRole("textbox"), "Testing lernen");

    screen.getByText(/testing lernen/i);
  });
});
