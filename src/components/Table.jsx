import { HiOutlineX } from "react-icons/hi";
import { HiCheck } from "react-icons/hi2";
import Modal from "./Modal";
import { useState } from "react";
import FormApprove from "./FormApprove";

function Table({ showAction }) {
  const [IsOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <table className="border-collapse shadow-[rgba(0,0,0,0.24)_0px_3px_8px] min-w-[800px] ">
        <tbody>
          <tr>
            <th>Tên</th>
            <th>Tuổi</th>
            <th>Nhóm máu</th>
            <th>Số điện thoại</th>
            <th>Địa chỉ</th>
            {showAction && <th>Hành động</th>}
          </tr>

          <tr>
            <td>bệnh viện huyết học</td>
            <td>18</td>
            <td>A+</td>
            <td>021346586</td>
            <td>21/5/2023</td>
            {showAction && (
              <td>
                <div className="flex gap-4 justify-center items-center text-xl font-bold">
                  <button
                    className="text-md font-bold bg-red-500 text-white cursor-pointer  px-6 py-1 rounded-md border-none hover:bg-red-600 transition-all duration-300"
                    onClick={() => {
                      setIsOpenModal(!IsOpenModal);
                    }}
                  >
                    <HiCheck />
                  </button>
                  <button className="text-md font-bold bg-red-500 text-white cursor-pointer  px-6 py-1 rounded-md border-none hover:bg-red-600 transition-all duration-300">
                    <HiOutlineX />
                  </button>
                </div>
              </td>
            )}
          </tr>
        </tbody>
      </table>

      {IsOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <FormApprove onCloseModal={() => setIsOpenModal(false)} />
        </Modal>
      )}
    </>
  );
}

export default Table;
