import { useState } from "react";
import { useSelector } from "react-redux";
import { useApproveDonor } from "../features/hospital/useApproveDonor";

function FormApprove({ donorId, sessionId }) {
  const { jwtToken, userId, fullName } = useSelector((store) => store.user);
  const [bloodType, setBloodType] = useState("none");
  const [quantity, setQuantity] = useState(100);

  const { approveDonor, isLoading } = useApproveDonor();

  function handleSubmit(e) {
    approveDonor({
      donorId,
      sessionId,
      jwtToken,
      bloodType,
      quantity: +quantity,
      hospitalId: userId,
      hospitalName: fullName,
    });

    e.preventDefault();
  }

  function handleCancel(e) {
    e.preventDefault();
  }
  return (
    <form
      className=" font-bold rounded-lg  text-zinc-700 flex flex-col gap-6"
      id="requestForm"
      action=""
    >
      <div className="flex items-center h-14 ">
        <label className="w-48" htmlFor="bloodGroup">
          Nhóm máu
        </label>
        <select
          className="text-red-500 p-2 w-72 shadow-[rgba(0,0,0,0.24)_0px_3px_8px]"
          id="bloodGroup"
          name="bloodGroup"
          value={bloodType}
          onChange={(e) => setBloodType(e.target.value)}
        >
          <option value="none">Chưa xác định</option>
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
        <label className="w-48" htmlFor="ml">
          Ngày hiến
        </label>
        <input
          className="p-2 w-72 shadow-[rgba(0,0,0,0.24)_0px_3px_8px]"
          type="date"
          id="ml"
          name="ml"
        />
      </div>
      <div className="flex items-center h-14 ">
        <label className="w-48" htmlFor="address">
          Đơn vị máu (ml)
        </label>
        <input
          className="p-2 w-72 shadow-[rgba(0,0,0,0.24)_0px_3px_8px]"
          type="number"
          id="address"
          name="address"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>

      <div className="btn-donor flex justify-end gap-6">
        <button
          className="text-l font-bold bg-red-500 text-white cursor-pointer mt-5 px-6 py-2 rounded-md border-none hover:bg-red-600 transition-all duration-300 "
          onClick={(e) => handleSubmit(e)}
          disabled={isLoading}
        >
          Gửi
        </button>
        <button
          className="text-l font-bold bg-red-500 text-white cursor-pointer mt-5 px-6 py-2 rounded-md border-none hover:bg-red-600 transition-all duration-300 "
          onClick={handleCancel}
          disabled={isLoading}
        >
          Huỷ
        </button>
      </div>
    </form>
  );
}

export default FormApprove;
