import { useGetDonorByAcitivities } from "../features/hospital/useGetDonorByActivities";
import TableRow from "./TableRow";

function Table({ showAction, activityId }) {
  const { donors, isLoading } = useGetDonorByAcitivities(activityId);

  if (isLoading)
    return <div className="text-center min-w-[600px] ">Loading...</div>;
  const donorsList = donors?.data;

  if (donorsList?.length === 0)
    return <div className="text-center min-w-[600px] ">Không có người nào</div>;

  return (
    <table className="border-collapse shadow-[rgba(0,0,0,0.24)_0px_3px_8px] min-w-[600px] ">
      <tbody>
        <tr>
          <th>Tên</th>
          <th>Nhóm máu</th>
          <th>Số điện thoại</th>
          {showAction ? <th>Hành động</th> : null}
        </tr>
        {donorsList.map((item, index) => {
          return (
            <TableRow
              key={item?.donorId}
              {...item}
              showActionState={showAction}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
