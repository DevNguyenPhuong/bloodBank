import { useSelector } from "react-redux";
import BloodItem from "../../components/BloodItem";
import { useGetBloodsByHospitalId } from "../../features/hospital/useGetBloodsByHospitalId";

function HospitalHome() {
  const { jwtToken } = useSelector((store) => store.user);
  const { userId: hospitalId } = useSelector((store) => store.user);
  const { bloods, isLoading, error } = useGetBloodsByHospitalId({
    id: hospitalId,
    jwtToken: jwtToken,
  });
  if (error)
    return (
      <div className=" mt-16 px-16 w-full">
        <div className=" flex flex-wrap gap-4 justify-center">
          Không thể tải dữ liệu
        </div>
      </div>
    );

  if (isLoading)
    return (
      <div className=" mt-16 px-16 w-full">
        <div className=" flex flex-wrap gap-4 justify-center">
          Đang tải số lượng máu
        </div>
      </div>
    );

  return (
    <div className=" mt-8 px-16 w-full">
      <div className="mb-8 text-center font-bold text-2xl text-zinc-600">
        Số lượng máu
      </div>
      <div className=" flex flex-wrap gap-4 justify-center">
        {bloods?.map((item, index) => (
          <BloodItem key={item.bloodType} {...item} />
        ))}
      </div>
    </div>
  );
}

export default HospitalHome;
