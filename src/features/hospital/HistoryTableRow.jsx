import { format } from "date-fns";

function HistoryTableRow({ hospitalName, donationDate, quantity }) {
  const formattedDate = format(donationDate, "dd/MM/yyyy");
  return (
    <tr>
      <td>{hospitalName}</td>
      <td>{formattedDate}</td>
      <td>{quantity}</td>
    </tr>
  );
}

export default HistoryTableRow;
