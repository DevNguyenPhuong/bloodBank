import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../features/authentication/useLogin";
import { ROLE } from "../utils/constant";

function Login() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useLogin();

  function handleLogin(e, role) {
    e.preventDefault();
    login({ userName, password, role });
  }

  return (
    <form className="shadow-[rgba(0,0,0,0.24)_0px_3px_8px] p-10 font-bold rounded-lg  text-zinc-700  flex-col gap-6 inline-flex">
      <div className="flex items-center h-14 ">
        <label className="w-32" htmlFor="dName">
          Tài khoản
        </label>
        <input
          className=" p-2 w-72 shadow-[rgba(0,0,0,0.24)_0px_3px_8px]"
          type="text"
          id="dName"
          name="dName"
          placeholder="Nhập tài khoản"
          required
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          disabled={isLoading}
        />
      </div>

      <div className="flex items-center h-14 ">
        <label className="w-32" htmlFor="ml">
          Mật khẩu
        </label>
        <input
          className="p-2 w-72 shadow-[rgba(0,0,0,0.24)_0px_3px_8px]"
          type="password"
          id="ml"
          name="ml"
          placeholder="Nhập mật khẩu"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </div>

      <div className="btn-donor flex justify-end gap-6">
        <button
          className="text-l font-bold bg-red-500 text-white cursor-pointer mt-5 px-6 py-2 rounded-md border-none hover:bg-red-600 transition-all duration-300 "
          onClick={(e) => handleLogin(e, ROLE.hospital)}
        >
          Đăng nhập (bệnh viện)
        </button>
        <button
          className="text-l font-bold bg-red-500 text-white cursor-pointer mt-5 px-6 py-2 rounded-md border-none hover:bg-red-600 transition-all duration-300 "
          onClick={(e) => handleLogin(e, ROLE.user)}
        >
          Đăng nhập
        </button>
        <button
          className="text-l font-bold bg-red-50 text-red-400 cursor-pointer mt-5 px-6 py-2 rounded-md hover:bg-red-100 transition-all duration-300 border-2 border-solid border-red-400 "
          onClick={() => navigate("/signup")}
        >
          Đăng ký
        </button>
      </div>
    </form>
  );
}

export default Login;
