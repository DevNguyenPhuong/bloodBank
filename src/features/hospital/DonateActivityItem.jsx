import { format } from "date-fns";
import { useHospital } from "./useHospital";
import { useDeleteActivity } from "./useDeleteActivity";

function DonateActivityItem({
  id,
  hospitalId,
  dateActivity,
  numberIsRegistration,
  quantity,
  operatingHour,
  activityType,
  onOpenModal,
}) {
  const { hospital: hospitalData, isLoading } = useHospital(hospitalId);

  function handleDeleteActivity(activityId) {
    deleteActivity(activityId);
  }

  const { deleteActivity, isLoading: isLoadingCancel } = useDeleteActivity();

  if (isLoading) return <div>Loading...</div>;

  const formattedDate = format(new Date(dateActivity), "dd/MM/yyyy");

  return (
    <div className="flex  gap-8 text-l leading-6 items-center w-3/4  shadow-[rgba(0,0,0,0.24)_0px_3px_8px]  p-[1.48em] rounded-lg">
      <div className="bg-transparent text-center p-5">
        <img
          className="w-32"
          width="50%"
          src={"https://static.giotmauvang.org.vn/ihpstatic/LOGO/CTD.png"}
          alt="CTD"
        />
      </div>
      <div className="w-full flex justify-between items-center  ">
        <div className="item-contex1">
          <h2 className="text-red-500 font-bold text-xl">
            {hospitalData?.fullName}
          </h2>
          <p>
            Địa chỉ : <span>{hospitalData?.address}</span>
          </p>
          <p>
            Thời gian hoạt động:
            <span>
              <span className="dateAction"> {formattedDate}: </span> - Từ{" "}
              {operatingHour}
            </span>
          </p>
          <p>
            Thời than hiến máu: <span> {operatingHour}</span>
          </p>
        </div>
        <div className="item-contex2">
          {activityType !== "user" && <p>Số lượng đăng ký</p>}
          {activityType !== "user" && (
            <p className="text-red-500 font-bold text-2xl">
              <span className="text-red-500 font-bold text-2xl">
                {numberIsRegistration}
              </span>
              /
              <span className="text-red-500 font-bold text-2xl ">
                {quantity}
              </span>{" "}
              người
            </p>
          )}
          <div className="flex flex-col gap-4">
            <button
              className="text-l font-bold bg-red-500 text-white cursor-pointer mt-5 px-6 py-2 rounded-md border-none hover:bg-red-600 transition-all duration-300 "
              onClick={() => onOpenModal(id)}
            >
              Xem danh sách
            </button>

            <button
              className="text-l font-bold bg-red-500 text-white cursor-pointer  px-6 py-2 rounded-md border-none hover:bg-red-600 transition-all duration-300 "
              onClick={() => handleDeleteActivity(id)}
              disabled={isLoadingCancel}
            >
              Xoá
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonateActivityItem;
