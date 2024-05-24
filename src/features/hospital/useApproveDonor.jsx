import { useMutation } from "@tanstack/react-query";
import { approveDonor as approveDonorAPI } from "../../services/apiHospital";
import { toast } from "react-hot-toast";

export function useApproveDonor() {
  const { mutate: approveDonor, isLoading } = useMutation({
    mutationFn: (data) => approveDonorAPI(data),

    onSuccess: (result, payload) => {
      toast.success(`Đã chấp nhận yêu cầu`);
    },
    onError: (err) => {
      toast.error("Chấp nhận không thành công");
    },
  });
  return { approveDonor, isLoading };
}
