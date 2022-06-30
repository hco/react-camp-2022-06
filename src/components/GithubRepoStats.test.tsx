import { render, screen } from "@testing-library/react";
import GithubRepoStats from "./GithubRepoStats";

describe("<GithubRepoStats />", () => {
  test("renders without crashing", () => {
    render(<GithubRepoStats repo="facebook/react" />);
  });

  test("it initially renders the loading inidicator", () => {
    render(<GithubRepoStats repo="facebook/react" />);
    screen.getByText("Loading", { exact: false });
  });

  test("renders the correct amount of stars", () => {
    render(<GithubRepoStats repo="facebook/react" />);

    return screen.findByText("facebook/react hat 190.655 Sternchen", {
      exact: false,
    });
  });
});
