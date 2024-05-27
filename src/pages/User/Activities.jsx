import { useGetActivities } from "../../features/users/useGetActivitiyById";
import { useSelector } from "react-redux";
import UserTakingActivityItem from "../../features/users/UserTakingAcitivityItem";

function Activities() {
  const { userId } = useSelector((store) => store.user);
  const { activities: activitiesUser, isLoading } = useGetActivities(userId);

  if (isLoading) return <div className="w-full">Đang tải danh sách</div>;

  if (activitiesUser?.data.length === 0) {
    return (
      <div className="w-full text-center text-red-500 text-2xl font-bold mt-5">
        Hoạt động trống
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="mt-6 flex justify-center flex-col items-center gap-4">
        {activitiesUser?.data?.map((item, index) => (
          <UserTakingActivityItem {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Activities;
