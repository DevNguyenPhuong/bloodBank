import ActivityItem from "../../components/ActivityItem";

function Activities() {
  return (
    <div className="w-full">
      <div className="mt-6 flex justify-center flex-col items-center gap-4">
        <ActivityItem activityType={"user"} btnText={"Huỷ"} />
        <ActivityItem activityType={"user"} btnText={"Huỷ"} />
        <ActivityItem activityType={"user"} btnText={"Huỷ"} />
        <ActivityItem activityType={"user"} btnText={"Huỷ"} />
      </div>
    </div>
  );
}

export default Activities;
