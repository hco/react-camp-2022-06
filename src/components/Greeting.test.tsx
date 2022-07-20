import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

describe("<Greeting />", () => {
  test("it renders without crashing", () => {
    render(<Greeting name="Kollegen von Stefan" />);
  });

  test("the given person will be greeted", () => {
    render(<Greeting name="Sarah" />);

    screen.getByText("Hello, Sarah!");
  });

  test("the name of the person is printed", () => {
    render(<Greeting name="Sarah" />);

    // screen.getByText("sarah", { exact: false });
    screen.getByText(/sarah/i);
  });

  test("renders a greeting", () => {
    render(<Greeting name="Sarah" />);

    screen.getByText(/hello/i);
  });

  test("it renders a paragraph with a greeting inside", () => {
    const { container } = render(<Greeting name="Philip" />);

    // Das hier entspricht nicht den von der testing-library vorgeschlagenen best practices.
    // testing-library rät dazu, keine implementierungsdetails zu testen,
    // sondern eine Komponente so zu testen, wie der user das wünscht.

    // eslint-disable-next-line testing-library/no-node-access
    expect(container?.firstChild?.nodeName).toBe("P");
    // eslint-disable-next-line testing-library/no-node-access
    expect(container?.firstChild).toHaveTextContent("Hello, Philip!");

    // screen.debug(container);
  });
});
