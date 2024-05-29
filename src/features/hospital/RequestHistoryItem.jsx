import { useHospital } from "../hospital/useHospital";
function RequestHistoryItem({
  id,
  hospitalAccept,
  status,
  quantity,
  bloodType,
}) {
  const { hospital: hospitalInfo, isLoading } = useHospital(hospitalAccept);

  // if (isLoading)
  //   return (
  //     <div className="flex  gap-8 text-l leading-6  shadow-[rgba(0,0,0,0.24)_0px_3px_8px]  px-8 py-4 rounded-lg mt-6">
  //       Loading...
  //     </div>
  //   );

  return (
    <div className="flex  gap-8 text-l leading-6  shadow-[rgba(0,0,0,0.24)_0px_3px_8px]  px-8 py-4 rounded-lg mt-6">
      <div className="flex  gap-16 items-center ">
        <div className="item-contex1 w-[500px]">
          <h2 className="text-red-500 font-bold text-xl">
            Tên bệnh viện gửi:
            {hospitalInfo?.fullName}
          </h2>
          <p>
            Địa chỉ : <span>{hospitalInfo?.address}</span>
          </p>
          <p>
            Nhóm máu:{" "}
            <span>{bloodType === "none" ? "không biết" : bloodType}</span>
          </p>
          <p>
            Số lượng: <span>{quantity} ml</span>
          </p>
        </div>
        <p className="font-bold text-red-500 text-md">
          Trạng thái: <span>{status === 0 ? "đang chờ" : "đã duyệt"}</span>
        </p>
      </div>
    </div>
  );
}

export default RequestHistoryItem;
