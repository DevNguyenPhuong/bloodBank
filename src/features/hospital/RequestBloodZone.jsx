import RequesBloodItem from "./RequesBloodItem";
import { useGetRequireBlood } from "./useGetRequireBlood";

function RequestBloodZone() {
  const { requestBloods, isLoading, error } = useGetRequireBlood({
    status: 0,
    page: 1,
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Không thể tải dữ liệu</div>;
  //console.log(requestBloods);
  if (requestBloods?.length === 0) return <div>Không có yêu cầu nào</div>;
  return (
    <div className="">
      {requestBloods.map((item, index) => (
        <RequesBloodItem key={item.id} {...item} />
      ))}
    </div>
  );
}

export default RequestBloodZone;
