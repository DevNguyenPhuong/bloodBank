import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteActivity as deleteActivityAPI } from "../../services/apiHospital";
import { toast } from "react-hot-toast";

export function useDeleteActivity() {
  const queryClient = useQueryClient();
  const { mutate: deleteActivity, isLoading } = useMutation({
    mutationFn: (id) => deleteActivityAPI(id),

    onSuccess: (result, payload) => {
      toast.success(`Xoá thành công`);
      queryClient.invalidateQueries({
        queryKey: ["hospitalActivities"],
      });
    },
    onError: (err) => {
      toast.error("Xoá thất bại");
    },
  });
  return { deleteActivity, isLoading };
}
