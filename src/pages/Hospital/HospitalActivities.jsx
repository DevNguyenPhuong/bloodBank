import { useState } from "react";
import ActivityItem from "../../components/ActivityItem";
import Modal from "../../components/Modal";
import Table from "../../components/Table";

function HospitalActivities() {
  const [IsOpenModal, setIsOpenModal] = useState(false);
  return (
    <div className="w-full">
      <div className="mt-12 items-center flex flex-col gap-5">
        <ActivityItem
          activityType={"hospital"}
          btnText={"Xem danh sách"}
          onOpenModal={() => setIsOpenModal(true)}
        />
        <ActivityItem
          activityType={"hospital"}
          btnText={"Xem danh sách"}
          onOpenModal={() => setIsOpenModal(true)}
        />
      </div>

      {IsOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <Table showAction={true} onCloseModal={() => setIsOpenModal(false)} />
        </Modal>
      )}
    </div>
  );
}

export default HospitalActivities;
