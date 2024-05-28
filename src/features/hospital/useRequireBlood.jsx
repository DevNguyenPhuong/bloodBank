import { useMutation, useQueryClient } from "@tanstack/react-query";
import { requireBlood as requireBloodAPI } from "../../services/apiHospital";
import { toast } from "react-hot-toast";

export function useRequireBlood() {
  const queryClient = useQueryClient();
  const { mutate: requireBlood, isLoading } = useMutation({
    mutationFn: (data) => requireBloodAPI(data),
    
    onSuccess: (result, payload) => {
      queryClient.invalidateQueries({
        queryKey: ["requestBloods"],
      });
      toast.success(`Yêu cầu thành công`);
    },
    onError: (err) => {
      toast.error("Yêu cầu thất bại");
    },
  });

  return { requireBlood, isLoading };
}
