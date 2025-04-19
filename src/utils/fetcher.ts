import { GITHUB_API_BASE } from "../constants/common";
import { joinPath } from "./join-path";

export type Method = "GET" | "PUT" | "POST" | "DELETE" | "PATCH";

type Params = {
  method: Method;
  endPoint: string;
  payload?: Record<string, string>;
  query?: Record<string, unknown>;
};

const AuthorizationHeader = {
  Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
  Accept: "application/vnd.github+json",
  "Content-Type": "application/json",
};

export const fetcher = async <TData = unknown>({
  endPoint,
  payload,
  method,
}: Params) => {
  const uri = joinPath([GITHUB_API_BASE, endPoint]);

  const response = await fetch(uri, {
    method,
    headers: AuthorizationHeader,
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${uri}`);
  }

  return response.json() as TData;
};
