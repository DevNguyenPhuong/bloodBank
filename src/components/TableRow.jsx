import { HiCheck, HiOutlineX } from "react-icons/hi";
import { useGetDonor } from "../features/hospital/useGetDonor";
import { useState } from "react";
import Modal from "./Modal";
import FormApprove from "./FormApprove";
import { useRejectDonor } from "../features/hospital/useRejectDonor";
import { useSelector } from "react-redux";

function TableRow({ showActionState, donorId, activityId, id }) {
  const [IsOpenModal, setIsOpenModal] = useState(false);
  const { donor, isLoading } = useGetDonor(donorId);
  const { rejectDonor, isLoading2 } = useRejectDonor();
  const { jwtToken } = useSelector((store) => store.user);
  if (isLoading)
    return (
      <tr>
        <td>Loading</td>
      </tr>
    );

  const { bloodType, fullName, phone } = donor;

  function handleCancel(data) {
    rejectDonor(data);
  }

  return (
    <>
      <tr>
        <td>{fullName}</td>
        <td>{bloodType === "none" ? "Chưa xác định" : bloodType}</td>
        <td>{phone}</td>
        {showActionState ? (
          <td>
            <div className="flex gap-4 justify-center items-center text-xl font-bold">
              <button
                className="text-md font-bold bg-red-500 text-white cursor-pointer  px-6 py-1 rounded-md border-none hover:bg-red-600 transition-all duration-300"
                onClick={() => setIsOpenModal(!IsOpenModal)}
              >
                <HiCheck />
              </button>
              <button
                className="text-md font-bold bg-red-500 text-white cursor-pointer  px-6 py-1 rounded-md border-none hover:bg-red-600 transition-all duration-300"
                onClick={() => handleCancel({ jwtToken, sessionId: id })}
                disabled={isLoading2}
              >
                <HiOutlineX />
              </button>
            </div>
          </td>
        ) : null}
      </tr>

      {IsOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <FormApprove
            donorId={donorId}
            sessionId={id}
            onCloseModal={() => setIsOpenModal(false)}
          />
        </Modal>
      )}
    </>
  );
}

export default TableRow;
