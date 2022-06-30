import { render, screen } from "@testing-library/react";
import Greeting from "./Greetings";

describe("<Greeting />", () => {
  test("it renders without errors", () => {
    render(<Greeting name="Danny" />);
  });

  test("it mentions the given person", () => {
    render(<Greeting name="Danny" />);

    screen.getByText("danny", { exact: false });
    screen.getByText(/danny/i);
  });

  test("it renders a paragraph with a greeting", () => {
    const { container } = render(<Greeting name="Danny" />);

    // Das hier entspricht nicht den best-practices die von der
    // react-testing-library empfohlen warden!!
    // eslint-disable-next-line testing-library/no-node-access
    expect(container?.firstChild?.nodeName).toBe("P");

    // eslint-disable-next-line testing-library/no-node-access
    expect(container?.firstChild).toHaveTextContent("Hello, Danny!");
  });
});
