import { useQuery } from "@tanstack/react-query";
import { getActivitiesById as getActivitiesByIdAPI } from "../../services/apiUser";

export function useGetActivitiesUserById(data) {
  const {
    data: activityInfo,
    isLoading,
    error,
  } = useQuery({
    queryFn: () => getActivitiesByIdAPI(data),
    queryKey: ["userActivityByid"],
  });

  return { activityInfo, isLoading, error };
}
