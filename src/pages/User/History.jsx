import { useSelector } from "react-redux";
import { useGetDonateHistory } from "../../features/users/useGetDonateHistory";
import HistoryTableRow from "../../features/hospital/HistoryTableRow";

function History() {
  const { userId } = useSelector((store) => store.user);
  const { histories, isLoading, error } = useGetDonateHistory(userId);
  if (isLoading)
    return (
      <div className="w-full">
        <div className="mt-16 flex justify-center">Loading...</div>
      </div>
    );

  if (error)
    return (
      <div className="w-full">
        <div className="mt-16 flex justify-center">Không thể tải dữ liệu</div>
      </div>
    );

  if (histories?.length === 0)
    return (
      <div className="w-full">
        <div className="mt-16 flex justify-center">
          chưa tham gia hoạt động nào
        </div>
      </div>
    );

  return (
    <div className="w-full">
      <div className="mt-16 flex justify-center">
        <table className="border-collapse shadow-[rgba(0,0,0,0.24)_0px_3px_8px] min-w-[800px] ">
          <tbody>
            <tr>
              <th>Tên bệnh viện</th>
              <th>Ngày hiến máu</th>
              <th>Hiến (ml)</th>
            </tr>
            {histories.map((item, index) => (
              <HistoryTableRow key={item.id} {...item} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default History;
