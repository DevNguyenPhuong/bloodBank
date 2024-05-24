import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginAPI } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setInfo } from "../users/userSlice";

export function useLogin() {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: (data) => loginAPI(data),

    onSuccess: (result, payload) => {
      queryClient.setQueryData(["user"], result.data);
      toast.success(`Chào mừng ${result.data.fullName} `);

      dispatch(
        setInfo({ ...result.data, isAuthenticated: true, roleId: payload.role })
      );
      if (payload.role === 0) navigate("/user/home", { replace: true });
      else navigate("/hospital/home", { replace: true });
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Provided email or password is incorrect");
    },
  });
  return { login, isLoading };
}
