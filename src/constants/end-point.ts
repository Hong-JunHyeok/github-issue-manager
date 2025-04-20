import { joinPath } from "../utils/join-path";

export const EndPoint = {
  GET_ISSUES: (owner: string, repoName: string) =>
    joinPath(["repos", owner, repoName, "issues"]),
  GET_REPOS: () => joinPath(["user", "repos"]),
} as const;
