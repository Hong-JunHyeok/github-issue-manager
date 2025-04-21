import { MileStoneDto } from "./milestone";

interface IssueDto {
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  user: User;
  labels: {
    id: number;
    node_id: string;
    url: string;
    name: string;
    color: string;
    default: boolean;
    description: string;
  }[];
  state: string;
  locked: boolean;
  assignee: AnyType;
  assignees: AnyType[];
  milestone: MileStoneDto;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at: AnyType;
  author_association: string;
  sub_issues_summary: SubIssuesSummary;
  active_lock_reason: AnyType;
  body: AnyType;
  closed_by: AnyType;
  reactions: Reactions;
  timeline_url: string;
  performed_via_github_app: AnyType;
  state_reason: AnyType;
}

export interface User {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  user_view_type: string;
  site_admin: boolean;
}

export interface SubIssuesSummary {
  total: number;
  completed: number;
  percent_completed: number;
}

export interface Reactions {
  url: string;
  total_count: number;
  "+1": number;
  "-1": number;
  laugh: number;
  hooray: number;
  confused: number;
  heart: number;
  rocket: number;
  eyes: number;
}
