import { useEffect } from "react";

export const useMount = (callbackFn: () => void) => {
  useEffect(() => {
    callbackFn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
