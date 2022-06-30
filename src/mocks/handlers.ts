import { rest } from "msw";
import { githubFacebookReact } from "./github/facebook_react";

export const handlers = [githubFacebookReact];
