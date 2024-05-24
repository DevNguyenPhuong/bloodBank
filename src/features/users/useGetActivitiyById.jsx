import { useQuery } from "@tanstack/react-query";
import { getActivitiesByUser as getActivitiesByUserAPI } from "../../services/apiUser";

export function useGetActivities(id) {
  const {
    data: activities,
    isLoading,
    error,
  } = useQuery({
    queryFn: () => getActivitiesByUserAPI(id),
    queryKey: ["userActivity"],
  });

  return { activities, isLoading, error };
}
