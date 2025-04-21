import { Dialog, FormControl, Textarea, TextInput } from "@primer/react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export const CreateIssueTemplateDialog = ({ open, onClose }: Props) => {
  if (!open) return null;

  return (
    <Dialog
      title="Create Issue Template"
      onClose={onClose}
      footerButtons={[
        { buttonType: "default", content: "Cancel", onClick: onClose },
        {
          buttonType: "primary",
          content: "Create Template",
          onClick: () => {
            alert("Created!");
          },
        },
      ]}
    >
      <form>
        <FormControl>
          <FormControl.Label>Issue Template Name</FormControl.Label>
          <TextInput
            size="medium"
            required
            monospace
            sx={{
              width: "100%",
            }}
          />
          <FormControl.Caption>
            Please enter a name for the issue template. A recognizable name is
            recommended.
          </FormControl.Caption>
        </FormControl>

        <div className="my-4" />

        <FormControl>
          <FormControl.Label>Issue Description Template</FormControl.Label>
          <Textarea rows={6} cols={70} resize="vertical" />
          <FormControl.Caption>
            Enter the content that will be automatically filled in the issue
            description. Markdown format is recommended.
          </FormControl.Caption>
        </FormControl>
      </form>
    </Dialog>
  );
};
