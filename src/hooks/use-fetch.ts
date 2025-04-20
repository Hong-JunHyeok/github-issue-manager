import { useEffect, useState } from "react";
import { fetcher, Method } from "../utils/fetcher";
import { useMount } from "./use-mount";

type Options = {
  endPoint: string;
  method: Method;
  payload?: Record<string, string>;
  query?: Record<string, unknown>;
  initialFetch?: boolean;
  onSuccess?: () => void;
  onError?: () => void;
};

export const useFetch = <TData = unknown>(options: Options) => {
  const [data, setData] = useState<TData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const fetch = async () => {
    try {
      setIsLoading(true);
      setIsError(false);
      setData(null);
      const data = await fetcher<TData>({
        endPoint: options.endPoint,
        method: options.method,
        payload: options.payload,
        query: options.query,
      });
      setData(data);
      setIsLoading(false);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const initialFetch = options.initialFetch ?? true;
    if (initialFetch) {
      fetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options.endPoint, options.payload, options.query]);

  return {
    data,
    isLoading,
    isError,
    refetch: fetch,
  };
};
