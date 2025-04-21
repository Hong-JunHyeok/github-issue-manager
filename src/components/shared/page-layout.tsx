import {
  EyeIcon,
  LogoGithubIcon,
  MilestoneIcon,
  ProjectIcon,
} from "@primer/octicons-react";
import { UnderlineNav } from "@primer/react";
import { PropsWithChildren } from "react";

export const PageLayoutComponent = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="w-full border-b border-gray-200 px-6 ">
        <div className="max-w-7xl mx-auto flex justify-between">
          <div className="flex items-center gap-1 font-bold text-xl cursor-pointer select-none w-fit">
            <LogoGithubIcon size={24} />
            <span className="font-thin text-gray-600">Issue Manager</span>
          </div>

          <UnderlineNav aria-label="Menus">
            <UnderlineNav.Item icon={EyeIcon} href="/">
              Issue Management
            </UnderlineNav.Item>
            <UnderlineNav.Item
              icon={MilestoneIcon}
              href="/milestone-management"
            >
              Milestone Management
            </UnderlineNav.Item>
            <UnderlineNav.Item icon={ProjectIcon}>
              Projects Management
            </UnderlineNav.Item>
            <UnderlineNav.Item href="#">Wiki</UnderlineNav.Item>
          </UnderlineNav>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 w-full px-6 py-8">
        <div className="max-w-7xl mx-auto">{children}</div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 py-6 text-center">
        <p className="text-sm text-gray-500">
          Powerful GitHub Issue Manager by{" "}
          <a
            href="https://github.com/Hong-JunHyeok"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-gray-700 hover:underline"
          >
            @Hong-JunHyeok
          </a>
        </p>
      </footer>
    </div>
  );
};
