import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getActivities as getActivitiesApi } from "../../services/apiUser";

export function useGetActivities() {
  const queryClient = useQueryClient();
  const { mutate: getActivities, isLoading } = useMutation({
    mutationFn: (data) => getActivitiesApi(data),

    onSuccess: (result) => {
      queryClient.setQueryData(["activities"], result.data);
    },
  });
  return { getActivities, isLoading };
}
