import { useMutation, useQueryClient } from "@tanstack/react-query";
import { bookingActivity as bookingActivityAPI } from "../../services/apiUser";
import { toast } from "react-hot-toast";

export function useBookingActivity() {
  const queryClient = useQueryClient();
  const { mutate: bookingActivity, isLoading } = useMutation({
    mutationFn: (data) => bookingActivityAPI(data),

    onSuccess: (result, payload) => {
      toast.success(`Đặt lịch thành công`);
      queryClient.invalidateQueries({
        queryKey: ["activities"],
      });
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Đặt lịch thất bại");
    },
  });
  return { bookingActivity, isLoading };
}
