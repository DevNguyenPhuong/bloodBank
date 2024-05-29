import { useSelector } from "react-redux";
import { useGetRequestHistories } from "./useGetRequestHistory";
import {} from "./useGetRequireBlood";
import RequestHistoryItem from "./RequestHistoryItem";

function RequesHistoryZone() {
  const { userId } = useSelector((store) => store.user);
  const { requestHistories, isLoading, error } = useGetRequestHistories({
    hospitalId: userId,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Không thể tải dữ liệu</div>;
  if (requestHistories?.length === 0) return <div>Không có lịch sử nào</div>;
  console.log(requestHistories);

  return (
    <div className="">
      {requestHistories.map((item, index) => (
        <RequestHistoryItem key={item.id} {...item} />
      ))}
    </div>
  );
}

export default RequesHistoryZone;
