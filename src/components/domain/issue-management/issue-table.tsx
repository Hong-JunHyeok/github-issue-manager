import { DataTable, Table } from "@primer/react/experimental";
import { User } from "../../../types/issue";
import { IssueOpenedIcon } from "@primer/octicons-react";
import { Box, Text } from "@primer/react";
import { AvatarWithOverlay } from "../../shared/avatar-with-overlay";

type TableIssueType = {
  id: number;
  issueName: string;
  author: User;
};

type Props = {
  data?: TableIssueType[];
  isLoading: boolean;
};

export const IssueTable = ({ data, isLoading }: Props) => {
  if (isLoading) {
    return (
      <Table.Container>
        <Table.Skeleton
          rows={10}
          columns={[
            {
              header: "Issue",
              id: "issueName",
            },
            {
              header: "Author",
              id: "author",
            },
          ]}
        />
      </Table.Container>
    );
  }

  if (!data || data.length === 0) {
    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        border="1px solid"
        borderColor="border.default"
        borderRadius={6}
        p={6}
        bg="canvas.subtle"
      >
        <IssueOpenedIcon size={32} />
        <Text mt={2} fontSize={2} fontWeight="semibold">
          No issues found
        </Text>
        <Text fontSize={1} color="fg.subtle">
          When issues are created, they’ll show up here.
        </Text>
      </Box>
    );
  }

  return (
    <Table.Container>
      <DataTable
        aria-labelledby="repositories-default"
        data={data ?? []}
        columns={[
          {
            header: "Issue",
            field: "issueName",
            rowHeader: true,
            renderCell: (row) => {
              return (
                <div className="flex items-center justify-between gap-1">
                  <IssueOpenedIcon size={18} />
                  <span className="font-semibold text-gray-800 hover:underline hover:text-blue-500 cursor-pointer text-lg">
                    {row.issueName}
                  </span>
                </div>
              );
            },
          },
          {
            header: "Author",
            field: "author",
            align: "end",
            renderCell: (row) => <AvatarWithOverlay author={row.author} />,
          },
        ]}
      />
    </Table.Container>
  );
};
