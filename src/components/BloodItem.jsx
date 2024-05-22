import { IoIosWater } from "react-icons/io";

function BloodItem() {
  return (
    <div className="items-center justify-center w-64 h-32 flex flex-col gap-6 rounded-lg  border-red-400 border-2">
      <div className="text-2xl font-bold text-red-500 flex items-center gap-2">
        <IoIosWater />
        <span>A +</span>
      </div>
      <div className="text-xl font-bold text-zinc-600">Đơn vị (ml): 2 </div>
    </div>
  );
}

export default BloodItem;
