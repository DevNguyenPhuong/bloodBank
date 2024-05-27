import { useState } from "react";
import { format } from "date-fns";
import { useGetActivities } from "../features/users/useGetActivities";

function BookingZone() {
  const [startDay, setStartDay] = useState(new Date());
  const [endDay, setEndDay] = useState(
    new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
  );

  const { refetch } = useGetActivities({
    startDay: format(startDay, "yyyy-MM-dd"),
    endDay: format(endDay, "yyyy-MM-dd"),
    status: 0,
  });

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await refetch({
        startDay: format(startDay, "yyyy-MM-dd"),
        endDay: format(endDay, "yyyy-MM-dd"),
        status: 0,
      });
    } catch (error) {
      console.error("Error fetching updated activities:", error);
    }
  }

  return (
    <div className="w-full flex flex-col items-center justify-center pb-8 px-16 py-0 mt-16">
      <form className="flex flex-col justify-center items-center gap-3.5 bg-red-100 rounded-md px-12 py-6">
        <h3 className="text-2xl font-bold text-red-500 flex items-center gap-4 mb-6">
          <div>Bạn cần đặt lịch vào thời gian nào ?</div>
        </h3>
        <div className="flex flex-col gap-6">
          <div className="flex items-center ">
            <label
              className="text-xl font-semibold text-zinc-700 inline-block w-60 justify-self-start "
              htmlFor=""
            >
              Từ ngày
            </label>
            <input
              className="rounded-md w-full text-xl font-bold text-zinc-600 shadow-md px-8 py-2 border-none"
              type="date"
              value={startDay.toISOString().slice(0, 10)}
              required
              onChange={(e) => setStartDay(new Date(e.target.value))}
            />
          </div>
          <div className="flex items-center">
            <label
              className="text-xl font-semibold text-zinc-700 inline-block w-60"
              htmlFor=""
            >
              Đến ngày
            </label>
            <input
              className="rounded-md w-full text-xl font-bold text-zinc-600 shadow-md px-8 py-2 border-none"
              type="date"
              required
              value={endDay.toISOString().slice(0, 10)}
              onChange={(e) => setEndDay(new Date(e.target.value))}
            />
          </div>
        </div>

        <button
          className="text-l font-bold bg-red-500 text-white cursor-pointer mt-4 px-6 py-3 rounded-md border-none hover:bg-red-600 transition-all duration-300 "
          onClick={(e) => handleSubmit(e)}
        >
          Tìm kiếm
        </button>
      </form>
    </div>
  );
}

export default BookingZone;
