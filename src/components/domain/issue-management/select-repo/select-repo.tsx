import { FormControl, Select, Text } from "@primer/react";
import { useFetch } from "../../../../hooks/use-fetch";
import { EndPoint } from "../../../../constants/end-point";
import { RepoDto } from "../../../../types/repo";
import { useLocalStorage } from "../../../../hooks/use-local-storage";
import { Storage } from "../../../../constants/storage";

export const SelectRepo = () => {
  const [selectedRepo, setSelectedRepo] = useLocalStorage(
    Storage.SELECTED_REPO,
    ""
  );

  const { data, isLoading, isError } = useFetch<RepoDto[]>({
    endPoint: EndPoint.GET_REPOS(),
    method: "GET",
    initialFetch: true,
  });

  return (
    <FormControl required>
      <FormControl.Label visuallyHidden />
      <Select
        placeholder="Choose a repository"
        disabled={isLoading || isError}
        value={selectedRepo}
        onChange={(event) => setSelectedRepo(event.target.value)}
      >
        {data?.length ? (
          data.map(({ name, id }) => (
            <Select.Option key={id} value={name}>
              {name}
            </Select.Option>
          ))
        ) : (
          <Select.Option value="" disabled>
            {isLoading ? "Loading..." : "No repositories available"}
          </Select.Option>
        )}
      </Select>

      <FormControl.Caption>
        <Text fontSize={1} color="fg.subtle">
          select repository to manage
        </Text>
      </FormControl.Caption>
    </FormControl>
  );
};
