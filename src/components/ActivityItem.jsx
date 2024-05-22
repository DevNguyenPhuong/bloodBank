function ActivityItem({ activityType, btnText, onOpenModal, isDeleteAble }) {
  console.log(activityType);
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
            Hiến máu - Trung tâm hiến máu nhân đạo tp.HCM
          </h2>
          <p>
            Địa chỉ : <span>106 thiên phước, phường 9, quận tân bình</span>
          </p>
          <p>
            Thời gian hoạt động:
            <span>
              <span className="dateAction"> 20/05/2024</span> - Từ 07:00 đến
              11:30
            </span>
          </p>
          <p>
            Thời than hiến máu: <span>07:00 - 11:00</span>
          </p>
        </div>
        <div className="item-contex2">
          {activityType !== "user" && <p>Số lượng đăng ký</p>}
          {activityType !== "user" && (
            <p className="text-red-500 font-bold text-2xl">
              <span className="text-red-500 font-bold text-2xl">5</span>/
              <span className="text-red-500 font-bold text-2xl ">200</span>{" "}
              người
            </p>
          )}
          <div className="flex flex-col gap-4">
            <button
              className="text-l font-bold bg-red-500 text-white cursor-pointer mt-5 px-6 py-2 rounded-md border-none hover:bg-red-600 transition-all duration-300 "
              onClick={onOpenModal}
            >
              {btnText}
            </button>
            {isDeleteAble && (
              <button
                className="text-l font-bold bg-red-500 text-white cursor-pointer  px-6 py-2 rounded-md border-none hover:bg-red-600 transition-all duration-300 "
                onClick={onOpenModal}
              >
                Xoá
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivityItem;
