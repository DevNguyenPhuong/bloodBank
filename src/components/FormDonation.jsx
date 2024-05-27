import { useState } from "react";
import { useSelector } from "react-redux";
import { useRequireBlood } from "../features/hospital/useRequireBlood";

function FormDonation() {
  const [bloodType, setBloodType] = useState("none");
  const [quantity, setQuantity] = useState(300);
  const { userId } = useSelector((store) => store.user);
  const { requireBlood, isLoading } = useRequireBlood();
  function onSubmit(e) {
    e.preventDefault();

    requireBlood({ hospitalId: userId, bloodType, quantity: +quantity });
  }
  return (
    <form
      className="shadow-[rgba(0,0,0,0.24)_0px_3px_8px] p-10 font-bold rounded-lg  text-zinc-700 flex flex-col gap-6"
      id="requestForm"
    >
      <div className="flex items-center h-14 ">
        <label className="w-32" htmlFor="bloodGroup">
          Nhóm máu
        </label>
        <select
          className="text-red-500 p-2 w-72 shadow-[rgba(0,0,0,0.24)_0px_3px_8px]"
          id="bloodGroup"
          name="bloodGroup"
          value={bloodType}
          onChange={(e) => setBloodType(e.target.value)}
          disabled={isLoading}
        >
          <option value="none">Không biết</option>
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
        <label className="w-32" htmlFor="quantity">
          Đơn vị máu
        </label>
        <input
          className="p-2 w-72 shadow-[rgba(0,0,0,0.24)_0px_3px_8px]"
          type="text"
          id="quantity"
          name="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          disabled={isLoading}
        />
      </div>

      <div className="btn-donor flex justify-end gap-6">
        <button
          className="text-l font-bold bg-red-500 text-white cursor-pointer mt-5 px-6 py-2 rounded-md border-none hover:bg-red-600 transition-all duration-300 "
          disabled={isLoading}
        >
          Huỷ
        </button>
        <button
          className="text-l font-bold bg-red-500 text-white cursor-pointer mt-5 px-6 py-2 rounded-md border-none hover:bg-red-600 transition-all duration-300 "
          onClick={onSubmit}
          disabled={isLoading}
        >
          Yêu cầu
        </button>
      </div>
    </form>
  );
}

export default FormDonation;
