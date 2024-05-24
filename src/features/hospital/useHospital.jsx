import { useQuery } from "@tanstack/react-query";
import { getHospitalById as getHospitalByIdAPI } from "../../services/apiHospital";

export function useHospital(hospitalId) {
  const {
    data: hospital,
    isLoading,
    error,
  } = useQuery({
    queryFn: () => getHospitalByIdAPI(hospitalId),
    queryKey: ["hospital"],
  });

  return { hospital, isLoading, error };
}
