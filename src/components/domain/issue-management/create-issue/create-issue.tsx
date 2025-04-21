import { Dialog, FormControl, Textarea } from "@primer/react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export const CreateIssueDialog = ({ open, onClose }: Props) => {
  if (!open) return null;

  return (
    <Dialog
      title="Create Issue"
      onClose={onClose}
      footerButtons={[
        { buttonType: "default", content: "Cancel", onClick: onClose },
        {
          buttonType: "primary",
          content: "Create issues",
          onClick: () => {
            alert("Created!");
          },
        },
      ]}
    >
      지원 예정 ...
    </Dialog>
  );
};
