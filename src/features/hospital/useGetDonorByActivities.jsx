import { useQuery } from "@tanstack/react-query";
import { getDonorsByActivities as getDonorsByActivitiesAPI } from "../../services/apiHospital";

export function useGetDonorByAcitivities(id) {
  const {
    data: donors,
    isLoading,
    error,
  } = useQuery({
    queryFn: () => getDonorsByActivitiesAPI(id),
    queryKey: ["donors"],
  });

  return { donors, isLoading, error };
}
