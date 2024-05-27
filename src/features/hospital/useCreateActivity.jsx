import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createActivity as createActivityAPI } from "../../services/apiHospital";
import { toast } from "react-hot-toast";

export function useCreateActivity() {
  const queryClient = useQueryClient();
  const { mutate: createActivity, isLoading } = useMutation({
    mutationFn: (data) => createActivityAPI(data),

    onSuccess: (result, payload) => {
      toast.success(`Thêm thành công`);
      queryClient.invalidateQueries({
        queryKey: ["hospitalActivities"],
      });
    },
    onError: (err) => {
      toast.error("Thêm thất bại");
    },
  });
  return { createActivity, isLoading };
}
