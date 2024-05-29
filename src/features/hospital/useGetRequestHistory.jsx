import { useQuery } from "@tanstack/react-query";
import { getRequestHistory as getRequestHistoryAPI } from "../../services/apiHospital";

export function useGetRequestHistories(data) {
  const {
    data: requestHistories,
    isLoading,
    error,
  } = useQuery({
    queryFn: () => getRequestHistoryAPI(data),
    queryKey: ["requestHistory"],
  });

  return { requestHistories, isLoading, error };
}
