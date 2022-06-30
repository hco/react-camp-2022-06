import { render } from "@testing-library/react";
import Greeting from "./Greetings";

describe("<Greeting />", () => {
  test("it renders without errors", () => {
    render(<Greeting name="Danny" />);
  });
});
