import { ButtonGroup } from "@primer/react";
import { CreateIssueTemplateButton } from "../components/domain/issue-management/create-issue-template/create-issue-template-button";
import { IssueListContainer } from "../components/domain/issue-management/issue-list/issue-list-container";
import { SelectRepo } from "../components/domain/issue-management/select-repo/select-repo";
import { CreateIssueButton } from "../components/domain/issue-management/create-issue/create-issue-button";

export const Index = () => {
  return (
    <>
      <div className="flex justify-between mb-4">
        <SelectRepo />

        <ButtonGroup>
          <CreateIssueTemplateButton />
          <CreateIssueButton />
        </ButtonGroup>
      </div>
      <IssueListContainer />
    </>
  );
};
