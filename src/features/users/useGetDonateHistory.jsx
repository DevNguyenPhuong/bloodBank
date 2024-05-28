import { useQuery } from "@tanstack/react-query";
import { getHistoryDonation as getHistoryDonationAPI } from "../../services/apiUser";

export function useGetDonateHistory(userId) {
  const {
    data: histories,
    isLoading,
    error,
  } = useQuery({
    queryFn: () => getHistoryDonationAPI(userId),
    queryKey: ["histories"],
  });

  return { histories, isLoading, error };
}
