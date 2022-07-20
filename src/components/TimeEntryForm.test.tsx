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
    // Arrange
    render(<TimeEntryForm onCreateEntry={() => {}} />);

    // Act
    userEvent.type(screen.getByRole("textbox"), "Testing lernen");

    // Assert
    screen.getByText(/testing lernen/i);
    expect(screen.getByRole("textbox")).toHaveValue("Testing lernen");
  });
});
