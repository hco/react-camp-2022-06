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
    const inputElement = screen.getByRole("textbox", {
      name: /comment/i,
    });

    // Act
    userEvent.type(inputElement, "Testing lernen");

    // Assert
    screen.getByText(/testing lernen/i);
    expect(inputElement).toHaveValue("Testing lernen");
  });

  test("that after typing a comment into the text field, an event with that comment is thrown", () => {
    // Arrange
    const onCreateEntryMock = jest.fn();
    render(<TimeEntryForm onCreateEntry={onCreateEntryMock} />);

    // Act
    userEvent.type(
      screen.getByRole("textbox", {
        name: /comment/i,
      }),
      "Testing lernen{enter}"
    );

    // Klicken statt enter drücken geht natürlich auch
    // userEvent.click(screen.getByRole("button"));

    // Assert
    expect(onCreateEntryMock).toHaveBeenCalledTimes(1);
    expect(onCreateEntryMock).toHaveBeenCalledWith(
      expect.objectContaining({
        comment: "Testing lernen",
      })
    );
  });
});
