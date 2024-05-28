import { useMutation } from "@tanstack/react-query";
import { acceptRequestBlood as acceptRequestBloodAPI } from "../../services/apiHospital";
import { toast } from "react-hot-toast";

export function useAcceptRequestBlood() {
  const { mutate: acceptRequestBlood, isLoading } = useMutation({
    mutationFn: (data) => acceptRequestBloodAPI(data),

    onSuccess: (result, payload) => {
      toast.success(`Đã chấp nhận yêu cầu`);
    },
    onError: (err) => {
      toast.error("Chấp nhận không thành công");
    },
  });
  return { acceptRequestBlood, isLoading };
}
