import { useQuery } from "@tanstack/react-query";
import { getDonorById as getDonorByIdAPI } from "../../services/apiHospital";

export function useGetDonor(donorId) {
  const {
    data: donor,
    isLoading,
    error,
  } = useQuery({
    queryFn: () => getDonorByIdAPI(donorId),
    queryKey: ["donor"],
  });

  return { donor, isLoading, error };
}
