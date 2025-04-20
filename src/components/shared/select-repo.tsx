import { FormControl, Select, Text } from "@primer/react";
import { useFetch } from "../../hooks/use-fetch";
import { EndPoint } from "../../constants/end-point";
import { RepoDto } from "../../types/repo";

export const SelectRepo = () => {
  const { data, isLoading, isError } = useFetch<RepoDto[]>({
    endPoint: EndPoint.GET_REPOS(),
    method: "GET",
    initialFetch: true,
  });

  return (
    <FormControl required>
      <Select
        size="small"
        placeholder="Choose a repository"
        disabled={isLoading || isError}
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
          Select the repository
        </Text>
      </FormControl.Caption>
    </FormControl>
  );
};
