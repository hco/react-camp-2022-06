import { render, screen } from "@testing-library/react";
import GithubRepoStats from "./GithubRepoStats";
import { server } from "../mocks/server";
import { githubFacebookReact2 } from "../mocks/github/facebook_react2";

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
  test("different response return different result", () => {
    server.resetHandlers(githubFacebookReact2);
    render(<GithubRepoStats repo="facebook/react" />);

    return screen.findByText("facebook/react hat 23 Sternchen", {
      exact: false,
    });
  });
});
