import { IoIosWater } from "react-icons/io";

function BloodItem({ bloodType, totalBloodQuantity }) {
  return (
    <div className="items-center justify-center w-64 h-32 flex flex-col gap-6 rounded-lg  border-red-400 border-2">
      <div className="text-2xl font-bold text-red-500 flex items-center justify-center gap-2">
        <IoIosWater />
        <span>{bloodType === "none" ? "không xác định" : bloodType}</span>
      </div>
      <div className="text-xl font-bold text-zinc-600">
        Đơn vị (ml): {totalBloodQuantity}{" "}
      </div>
    </div>
  );
}

export default BloodItem;
