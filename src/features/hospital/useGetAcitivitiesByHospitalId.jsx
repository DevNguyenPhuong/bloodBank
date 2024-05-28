import { useQuery } from "@tanstack/react-query";
import { getAcitivitiesByHospitalId as getAcitivitiesByHospitalIdAPI } from "../../services/apiHospital";

export function useGetAcitivitiesByHospitalId(hospitalId, status) {
  const {
    data: hospitalActivities,
    isLoading,
    error,
  } = useQuery({
    queryFn: () => getAcitivitiesByHospitalIdAPI(hospitalId,status),
    queryKey: ["hospitalActivities"],
  });

  return { hospitalActivities, isLoading, error };
}
