import { render, screen } from "@testing-library/react";
import GithubRepoStats from "./GithubRepoStats";
import { setupServer } from "msw/node";
import { githubFacebookReact } from "../mocks/github/facebook_react";

export const server = setupServer(githubFacebookReact);
// Establish API mocking before all tests.
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());
// Clean up after the tests are finished.
afterAll(() => server.close());

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
