import { useQuery } from "@tanstack/react-query";
import { getBloodsByHospitalId as getBloodsByHospitalIdAPI } from "../../services/apiHospital";

export function useGetBloodsByHospitalId(data) {
  const {
    data: bloods,
    isLoading,
    error,
  } = useQuery({
    queryFn: () => getBloodsByHospitalIdAPI(data),
    queryKey: ["bloods"],
  });

  return { bloods, isLoading, error };
}
