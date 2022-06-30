import { render, screen } from "@testing-library/react";
import TimeEntryForm from "./TimeEntryForm";
import userEvent from "@testing-library/user-event";

describe("<TimeEntryForm />", () => {
  test("it renders without crashing", () => {
    render(<TimeEntryForm onCreateEntry={() => {}} />);
  });

  test(
    "after typing into the text field, " +
      "the text is visible next to the textfield",
    () => {
      render(<TimeEntryForm onCreateEntry={() => {}} />);

      const commentField = screen.getByRole("textbox", {
        name: /kommentar/i,
      });

      userEvent.type(commentField, "React-Testing lernen");

      screen.getByText(/react-testing lernen/i);
    }
  );
});
