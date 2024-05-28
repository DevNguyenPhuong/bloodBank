import { useHospital } from "../hospital/useHospital";
import { useSelector } from "react-redux";
import { useAcceptRequestBlood } from "./useAcceptRequestBlood";
function RequesBloodItem({ id, hospitalId, quantity, bloodType }) {
  const { hospital: hospitalInfo } = useHospital(hospitalId);
  const { userId } = useSelector((store) => store.user);
  const { acceptRequestBlood, isLoading } = useAcceptRequestBlood();
  function handleAccept(requestedId, hospitalAccept) {
    acceptRequestBlood({ requestedId, hospitalAccept });
  }

  return (
    <div className="flex  gap-8 text-l leading-6  shadow-[rgba(0,0,0,0.24)_0px_3px_8px]  px-8 py-4 rounded-lg">
      <div className="flex  gap-16 items-center ">
        <div className="item-contex1 ">
          <h2 className="text-red-500 font-bold text-xl">
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
        <button
          className="text-l font-bold bg-red-500 text-white cursor-pointer mt-5 px-6 py-2 rounded-md border-none hover:bg-red-600 transition-all duration-300 "
          disabled={userId === (hospitalId || isLoading)}
          onClick={() => handleAccept(id, userId)}
        >
          Chấp nhận
        </button>
      </div>
    </div>
  );
}

export default RequesBloodItem;
