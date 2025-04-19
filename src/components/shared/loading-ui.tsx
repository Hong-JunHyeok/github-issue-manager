import { Spinner } from "@primer/react";

type Props = {
  loadingText?: string;
};

export const LoadingUI = ({ loadingText }: Props) => (
  <div className="flex justify-center flex-col w-full p-4 gap-3 items-center">
    <Spinner />

    {loadingText && <span className="font-bold">{loadingText}</span>}
  </div>
);
