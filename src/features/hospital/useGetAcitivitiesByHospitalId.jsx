import { useQuery } from "@tanstack/react-query";
import { getAcitivitiesByHospitalId as getAcitivitiesByHospitalIdAPI } from "../../services/apiHospital";

export function useGetAcitivitiesByHospitalId(hospitalId) {
  const {
    data: hospitalActivities,
    isLoading,
    error,
  } = useQuery({
    queryFn: () => getAcitivitiesByHospitalIdAPI(hospitalId),
    queryKey: ["hospitalActivities"],
  });

  return { hospitalActivities, isLoading, error };
}
