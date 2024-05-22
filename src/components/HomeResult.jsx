import ActivityItem from "./ActivityItem";

function HomeResult() {
  return (
    <>
      <div className="flex justify-center flex-col items-center gap-4">
        <div className=" text-red-500 font-bold text-2xl">4 kết quả</div>
        <ActivityItem activityType={"home"} btnText={"Đặt lịch"} />
        <ActivityItem activityType={"home"} btnText={"Đặt lịch"} />
        <ActivityItem activityType={"home"} btnText={"Đặt lịch"} />
        <ActivityItem activityType={"home"} btnText={"Đặt lịch"} />
      </div>
    </>
  );
}

export default HomeResult;
