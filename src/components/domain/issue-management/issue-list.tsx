import { useFetch } from "../../../hooks/use-fetch";
import { EndPoint } from "../../../constants/end-point";
import type { IssueDto } from "../../../types/issue";
import { LoadingUI } from "../../shared/loading-ui";

export const IssueList = () => {
  const { data, isLoading, isError } = useFetch<IssueDto[]>({
    endPoint: EndPoint.GET_ISSUES("junhyeok-clap", "test-repo"),
    method: "GET",
  });

  if (isLoading) {
    return <LoadingUI loadingText="Issue 정보를 불러오고 있습니다." />;
  }

  if (isError) {
    return <div>Error</div>;
  }

  if (!isLoading && data?.length === 0) {
    return <span>아무것도 없네요!</span>;
  }

  return (
    <ul className="divide-y divide-gray-200">
      {data?.map((issue) => (
        <li
          key={issue.id}
          className="flex flex-col gap-1 py-4 px-2 hover:bg-gray-50 transition-colors"
        >
          {/* 상단: 제목 */}
          <div className="flex items-start justify-between gap-2">
            <span className="font-semibold text-gray-800 hover:underline cursor-pointer">
              {issue.title}
            </span>
          </div>

          {/* 하단: 라벨 */}
          <div className="flex flex-wrap gap-2">
            {issue.labels.map((label) => (
              <span
                key={label.id}
                className="text-xs font-medium px-2 py-0.5 rounded-full"
                style={{
                  backgroundColor: `#${label.color}`,
                  color: "#fff",
                }}
              >
                {label.name}
              </span>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
};
