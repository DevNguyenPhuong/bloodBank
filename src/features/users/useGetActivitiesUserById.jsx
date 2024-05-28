import { useQuery } from "@tanstack/react-query";
import { getActivitiesById as getActivitiesByIdAPI } from "../../services/apiUser";

export function useGetActivitiesUserById(id) {
  const {
    data: activityInfo,
    isLoading,
    error,
  } = useQuery({
    queryFn: () => getActivitiesByIdAPI(id),
    queryKey: ["userActivityByid"],
  });

  return { activityInfo, isLoading, error };
}
