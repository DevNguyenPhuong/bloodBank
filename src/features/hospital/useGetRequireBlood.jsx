import { useQuery } from "@tanstack/react-query";
import { getRequestBlood as getRequestBloodAPI } from "../../services/apiHospital";

export function useGetRequireBlood(data) {
  const {
    data: requestBloods,
    isLoading,
    error,
  } = useQuery({
    queryFn: () => getRequestBloodAPI(data),
    queryKey: ["requestBloods"],
  });

  return { requestBloods, isLoading, error };
}
