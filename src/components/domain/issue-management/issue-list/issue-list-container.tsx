import { useFetch } from "../../../../hooks/use-fetch";
import { EndPoint } from "../../../../constants/end-point";
import type { IssueDto } from "../../../../types/issue";
import { IssueTable } from "./issue-table";
import { useLocalStorage } from "../../../../hooks/use-local-storage";
import { Storage } from "../../../../constants/storage";

export const IssueListContainer = () => {
  const [selectedRepo] = useLocalStorage<string>(Storage.SELECTED_REPO);

  const { data, isLoading } = useFetch<IssueDto[]>({
    // TODO 하드코딩 제거
    endPoint: EndPoint.GET_ISSUES("junhyeok-clap", selectedRepo),
    method: "GET",
  });

  return <IssueTable data={data ?? []} isLoading={isLoading} />;
};
