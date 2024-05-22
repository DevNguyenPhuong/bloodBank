import { useState } from "react";
import ActivityItem from "../../components/ActivityItem";
import Modal from "../../components/Modal";

import Table from "../../components/Table";

function DonateActivities() {
  const [IsOpenModal, setIsOpenModal] = useState(false);

  return (
    <div className="w-full">
      <div className="mt-12 items-center flex flex-col gap-5">
        <button className="text-l font-bold bg-red-500 text-white cursor-pointer mt-5 px-6 py-2 rounded-md border-none hover:bg-red-600 transition-all duration-300">
          Thêm hoạt động hiến máu
        </button>
        <ActivityItem
          onOpenModal={() => setIsOpenModal(true)}
          activityType={"hospital"}
          btnText={"Xem danh sách"}
          isDeleteAble={true}
        />
        <ActivityItem
          onOpenModal={() => setIsOpenModal(true)}
          activityType={"hospital"}
          btnText={"Xem danh sách"}
          isDeleteAble={true}
        />
      </div>

      {IsOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <Table
            showAction={false}
            onCloseModal={() => setIsOpenModal(false)}
          />
        </Modal>
      )}
    </div>
  );
}

export default DonateActivities;
