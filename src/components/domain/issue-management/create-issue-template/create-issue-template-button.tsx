import { Button, Tooltip } from "@primer/react";
import { useState } from "react";
import { CreateIssueTemplateDialog } from "./create-issue-template";

export const CreateIssueTemplateButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip text="Create a reusable template for issue creation.">
        <Button className="" variant="default" onClick={() => setOpen(true)}>
          Create Issue Template
        </Button>
      </Tooltip>

      <CreateIssueTemplateDialog open={open} onClose={() => setOpen(false)} />
    </>
  );
};
