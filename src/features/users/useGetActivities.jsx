import { useQuery } from "@tanstack/react-query";
import { getActivities as getActivitiesApi } from "../../services/apiUser";

export function useGetActivities(info) {
  const {
    data: activities,
    isLoading,
    refetch,
  } = useQuery({
    queryFn: () => getActivitiesApi(info),
    queryKey: ["activities"],
  });

  return { activities, isLoading, refetch };
}
