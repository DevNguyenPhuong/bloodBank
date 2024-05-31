import { useState } from "react";
import { format } from "date-fns";
import { useCreateActivity } from "../features/hospital/useCreateActivity";

function FormAddActivities({ onClose, hospitalId }) {
  const [startDay, setStartDay] = useState(new Date());
  const [quantity, setQuantity] = useState(50);
  const [time, setTime] = useState("8:00 - 9:00");
  const { createActivity, isLoading } = useCreateActivity();

  function handleSubmit(e) {
    e.preventDefault();
    const outputDate = format(startDay, "yyyy-MM-dd'T'00:00:00.000'Z'");

    createActivity({
      dateActivity: outputDate,
      operatingHour: time,
      quantity,
      hospitalId,
    });
    onClose();
  }
  return (
    <div className="w-full flex flex-col items-center justify-center ">
      <form className="flex flex-col justify-center items-center gap-3.5  rounded-md  ">
        <h3 className="text-2xl font-bold text-red-500 flex items-center gap-4 mb-6">
          <div>Thêm hoạt động hiến máu</div>
        </h3>
        <div className="flex flex-col gap-6">
          <div className="flex items-center ">
            <label
              className="text-xl font-semibold text-zinc-700 inline-block w-60 justify-self-start "
              htmlFor=""
            >
              Ngày diễn ra
            </label>
            <input
              className="rounded-md w-full text-xl font-bold text-zinc-600 shadow-[rgba(0,0,0,0.24)_0px_3px_8px] px-8 py-2 border-none"
              type="date"
              value={startDay.toISOString().slice(0, 10)}
              required
              onChange={(e) => setStartDay(new Date(e.target.value))}
              disabled={isLoading}
            />
          </div>
          <div className="flex items-center">
            <label
              className="text-xl font-semibold text-zinc-700 inline-block w-60"
              htmlFor=""
            >
              Thời gian
            </label>
            <select
              className="rounded-md w-full text-xl font-bold text-zinc-600 shadow-[rgba(0,0,0,0.24)_0px_3px_8px] px-8 py-2 border-none"
              name="time"
              onChange={(e) => setTime(e.target.value)}
              disabled={isLoading}
            >
              <option value="8:00 - 9:00">8:00 - 9:00</option>
              <option value="9:00 - 11:00">9:00 - 11:00</option>
              <option value="11:00 - 13:00">11:00 - 13:00</option>
              <option value="13:00 - 15:00">13:00 - 15:00</option>
              <option value="15:00 - 17:00">15:00 - 17:00</option>
            </select>
          </div>

          <div className="flex items-center">
            <label
              className="text-xl font-semibold text-zinc-700 inline-block w-60"
              htmlFor=""
            >
              Số người
            </label>
            <input
              className="rounded-md w-full text-xl font-bold text-zinc-600 shadow-[rgba(0,0,0,0.24)_0px_3px_8px] px-8 py-2 border-none"
              type="number"
              required
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              disabled={isLoading}
            />
          </div>
        </div>

        <div className="flex gap-4">
          <button
            className="w-28 text-l font-bold bg-red-500 text-white cursor-pointer mt-4 px-6 py-3 rounded-md border-none hover:bg-red-600 transition-all duration-300 "
            onClick={(e) => handleSubmit(e)}
            disabled={isLoading}
          >
            Thêm
          </button>

          <button
            className="w-28 text-l font-bold bg-red-500 text-white cursor-pointer mt-4 px-6 py-3 rounded-md border-none hover:bg-red-600 transition-all duration-300 "
            onClick={(e) => handleSubmit(e)}
            disabled={isLoading}
          >
            Huỷ
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormAddActivities;
