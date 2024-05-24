import { useMutation } from "@tanstack/react-query";
import { bookingActivity as bookingActivityAPI } from "../../services/apiUser";
import { toast } from "react-hot-toast";

export function useBookingActivity() {
  const { mutate: bookingActivity, isLoading } = useMutation({
    mutationFn: (data) => bookingActivityAPI(data),

    onSuccess: (result, payload) => {
      toast.success(`Đặt lịch thành công`);
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Đặt lịch thất bại");
    },
  });
  return { bookingActivity, isLoading };
}
