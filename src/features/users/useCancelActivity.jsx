import { useMutation, useQueryClient } from "@tanstack/react-query";
import { cancelActivity as cancelActivityAPI } from "../../services/apiUser";
import { toast } from "react-hot-toast";

export function useCancelActivity() {
  const queryClient = useQueryClient();
  const { mutate: cancelActivity, isLoading } = useMutation({
    mutationFn: (id) => cancelActivityAPI(id),

    onSuccess: (result, payload) => {
      toast.success(`Huỷ thành công`);
      queryClient.invalidateQueries({
        queryKey: ["userActivity"],
      });
    },
    onError: (err) => {
      toast.error("Huỷ thất bại");
    },
  });
  return { cancelActivity, isLoading };
}
