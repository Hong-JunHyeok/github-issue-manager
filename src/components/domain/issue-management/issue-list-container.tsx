import { useFetch } from "../../../hooks/use-fetch";
import { EndPoint } from "../../../constants/end-point";
import type { IssueDto } from "../../../types/issue";
import { IssueTable } from "./issue-table";

export const IssueListContainer = () => {
  const { data, isLoading } = useFetch<IssueDto[]>({
    // TODO 하드코딩 제거
    endPoint: EndPoint.GET_ISSUES("junhyeok-clap", "test-repo"),
    method: "GET",
  });

  const refinedData = data?.map(({ id, title, user }) => ({
    id,
    issueName: title,
    author: user,
  }));

  return <IssueTable data={refinedData} isLoading={isLoading} />;
};
