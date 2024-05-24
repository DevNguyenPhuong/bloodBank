import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSignup } from "../features/authentication/useSignup";

function Signup() {
  const navigate = useNavigate();
  const { signup, isLoading } = useSignup();
  const { register, handleSubmit, getValues, formState } = useForm();
  const { errors } = formState;
  console.log(errors);
  function onSubmit(data) {
    const { rePassword, ...sendData } = data;
    signup(sendData);
  }

  return (
    <form
      className="shadow-[rgba(0,0,0,0.24)_0px_3px_8px] p-10 font-bold rounded-lg  text-zinc-700 flex flex-col gap-2"
      id="requestForm"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex items-center h-14 ">
        <label className="w-32" htmlFor="username">
          Tên người dùng
        </label>
        <input
          className=" p-2 w-72 shadow-[rgba(0,0,0,0.24)_0px_3px_8px]"
          type="text"
          id="username"
          placeholder="Nhập tên người dùng"
          {...register("username", {
            required: "Yêu cầu nhập tên người dùng",
          })}
          disabled={isLoading}
        />
      </div>
      <div className="flex items-center h-14 ">
        <label className="w-32" htmlFor="fullname">
          Họ và tên
        </label>
        <input
          className=" p-2 w-72 shadow-[rgba(0,0,0,0.24)_0px_3px_8px]"
          type="text"
          id="fullname"
          placeholder="Nhập họ và tên"
          {...register("fullname", {
            required: "Yêu cầu nhập họ và tên",
          })}
          disabled={isLoading}
        />
      </div>

      <div className="flex items-center h-14 ">
        <label className="w-32" htmlFor="password">
          Mật khẩu
        </label>
        <input
          className=" p-2 w-72 shadow-[rgba(0,0,0,0.24)_0px_3px_8px]"
          type="password"
          id="password"
          placeholder="nhập mật khẩu"
          {...register("password", {
            required: "Yêu cầu nhập mật khẩu",
          })}
          disabled={isLoading}
        />
      </div>

      <div className="flex items-center h-14 ">
        <label className="w-32" htmlFor="rePassword">
          Nhập lại
        </label>
        <input
          className=" p-2 w-72 shadow-[rgba(0,0,0,0.24)_0px_3px_8px]"
          type="password"
          id="rePassword"
          placeholder="nhập lại mật khẩu"
          {...register("rePassword", {
            required: "Yêu cầu nhập lại mật khẩu",
            validate: (value) =>
              getValues().password === value || "Cần khẩu cần trùng khớp",
          })}
          disabled={isLoading}
        />
      </div>
      <div className="flex items-center h-14 ">
        <label className="w-32" htmlFor="bloodType">
          Nhóm máu
        </label>
        <select
          className="text-red-500 p-2 w-72 shadow-[rgba(0,0,0,0.24)_0px_3px_8px]"
          name="bloodType"
          {...register("bloodType")}
          defaultValue={"none"}
          disabled={isLoading}
        >
          <option value="none">không biết</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>
      </div>
      <div className="flex items-center h-14 ">
        <label className="w-32" htmlFor="phoneNumber">
          Số điện thoại
        </label>
        <input
          className="p-2 w-72 shadow-[rgba(0,0,0,0.24)_0px_3px_8px]"
          type="number"
          id="phone"
          placeholder="Số điện thoại"
          {...register("phone", {
            required: "Yêu cầu nhập số điện thoại",
          })}
          disabled={isLoading}
        />
      </div>

      <div className="btn-donor flex justify-end gap-6">
        <button
          className="text-l font-bold bg-red-500 text-white cursor-pointer mt-5 px-6 py-2 rounded-md border-none hover:bg-red-600 transition-all duration-300 "
          disabled={isLoading}
        >
          Đăng ký
        </button>
        <button
          className="text-l font-bold bg-red-50 text-red-400 cursor-pointer mt-5 px-6 py-2 rounded-md hover:bg-red-100 transition-all duration-300 border-2 border-solid border-red-400 "
          onClick={() => navigate("/login")}
        >
          Đăng nhập
        </button>
      </div>
    </form>
  );
}

export default Signup;
