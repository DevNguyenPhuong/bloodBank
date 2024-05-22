import BloodItem from "../../components/BloodItem";

function HospitalHome() {
  return (
    <div className=" mt-16 px-16 w-full">
      <div className=" flex flex-wrap gap-4 justify-center">
        <BloodItem />
        <BloodItem />
        <BloodItem />
        <BloodItem />
        <BloodItem />
        <BloodItem />
        <BloodItem />
        <BloodItem />
      </div>
      <div className="text-center mt-8 text-2xl font-bold text-zinc-600">
        Các hoạt động đang tổ chức: 3
      </div>
    </div>
  );
}

export default HospitalHome;
