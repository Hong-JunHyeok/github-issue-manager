import { DataTable, Table } from "@primer/react/experimental";
import { IssueDto } from "../../../../types/issue";
import { MilestoneIcon, IssueOpenedIcon } from "@primer/octicons-react";
import { Box, Button, Label, LabelGroup, Text, Tooltip } from "@primer/react";
import { AvatarWithOverlay } from "../../../shared/avatar-with-overlay";

type Props = {
  data: IssueDto[];
  isLoading: boolean;
};

export const IssueTable = ({ data, isLoading }: Props) => {
  if (isLoading) {
    return (
      <Table.Container>
        <Table.Skeleton
          rows={10}
          columns={[
            { header: "Issue", id: "id" },
            { header: "", id: "user" },
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
        aria-labelledby="issues-table"
        data={data}
        columns={[
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          {
            header: "Issue",
            field: "id",
            rowHeader: true,
            renderCell: (row) => (
              <div className="flex flex-col gap-1 py-2">
                <div className="flex items-center gap-2">
                  <IssueOpenedIcon size={16} className="text-green-600" />
                  <span className="font-semibold text-[15px] text-fg.default hover:underline hover:text-accent.fg cursor-pointer">
                    {row.title}
                  </span>
                </div>

                {row.labels?.length > 0 && (
                  <LabelGroup>
                    {row.labels.map((label) => (
                      <Label
                        key={label.id}
                        sx={{ mr: 1, mt: 1 }}
                        style={{
                          backgroundColor: `#${label.color}`,
                          color: "#ffffff",
                        }}
                      >
                        {label.name}
                      </Label>
                    ))}
                  </LabelGroup>
                )}

                {row.milestone && (
                  <div className="w-fit">
                    <Tooltip
                      text="Click the button to go to the milestone management page."
                      direction="n"
                    >
                      <Button
                        variant="primary"
                        size="small"
                        className="flex"
                        leadingVisual={MilestoneIcon}
                      >
                        {row.milestone.title}
                      </Button>
                    </Tooltip>
                  </div>
                )}
              </div>
            ),
          },
          {
            header: "",
            field: "user",
            align: "end",
            renderCell: (row) => (
              <div className="pr-2">
                <AvatarWithOverlay author={row.user} />
              </div>
            ),
          },
        ]}
      />
    </Table.Container>
  );
};
