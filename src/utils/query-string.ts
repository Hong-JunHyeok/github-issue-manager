export const getQueryString = (
  queryObj: Record<string, string> | undefined
) => {
  if (queryObj) return;

  return new URLSearchParams(queryObj).toString();
};
