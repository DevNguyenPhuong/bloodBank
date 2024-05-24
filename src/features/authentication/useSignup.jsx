import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signup as signupAPI } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export function useSignup() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: (data) => signupAPI(data),

    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data);
      toast.success(`Tạo tài khoản thành công`);
      navigate("/login", { replace: false });
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Tạo tài khoản không thành công");
    },
  });
  return { signup, isLoading };
}
