import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearInfo } from "../users/userSlice";

export function useLogout() {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: () => {
      return dispatch(clearInfo());
    },
    onSuccess: () => {
      queryClient.removeQueries();
      localStorage.removeItem("jwtToken");
      navigate("/", { replace: false });
    },
  });

  return { logout, isLoading };
}
