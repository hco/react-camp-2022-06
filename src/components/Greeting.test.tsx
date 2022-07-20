import { render } from "@testing-library/react";
import Greeting from "./Greeting";

describe("<Greeting />", () => {
  test("it renders without crashing", () => {
    render(<Greeting name="Kollegen von Stefan" />);
  });
});
