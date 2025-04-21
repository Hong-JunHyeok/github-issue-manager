import { Button, Tooltip } from "@primer/react";
import { useState } from "react";
import { CreateIssueDialog } from "./create-issue";

export const CreateIssueButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip text="Create multiple templates at once.">
        <Button className="" variant="primary" onClick={() => setOpen(true)}>
          Create Issues
        </Button>
      </Tooltip>

      <CreateIssueDialog open={open} onClose={() => setOpen(false)} />
    </>
  );
};
