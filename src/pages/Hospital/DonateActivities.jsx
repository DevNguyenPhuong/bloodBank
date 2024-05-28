import { useState } from "react";
import Modal from "../../components/Modal";
import Table from "../../components/Table";
import DonateActivityItem from "../../features/hospital/DonateActivityItem";
import { useGetAcitivitiesByHospitalId } from "../../features/hospital/useGetAcitivitiesByHospitalId";
import { useSelector } from "react-redux";
import FormAddActivities from "../../components/FormAddAcitivity";

function DonateActivities() {
  const [IsOpenModal, setIsOpenModal] = useState(false);
  const [IsOpenModalAddActivity, setIsOpenModalAddActivity] = useState(false);
  const [activityId, setActivityId] = useState("");
  const { userId } = useSelector((store) => store.user);
  const status = 0;
  const { hospitalActivities, isLoading } =
    useGetAcitivitiesByHospitalId(userId, status);
  if (isLoading) return <div>Loading...</div>;
  
  function handleModal(activityIdx) {
    setIsOpenModal(!IsOpenModal);
    setActivityId(activityIdx);
  }

  return (
    <div className="w-full">
      <div className="mt-12 items-center flex flex-col gap-5">
        <button
          className="text-l font-bold bg-red-500 text-white cursor-pointer mt-5 px-6 py-2 rounded-md border-none hover:bg-red-600 transition-all duration-300"
          onClick={() => setIsOpenModalAddActivity(!IsOpenModalAddActivity)}
        >
          Thêm hoạt động hiến máu
        </button>
        {hospitalActivities.map((item, index) => (
          <DonateActivityItem
            {...item}
            key={item.id}
            onOpenModal={handleModal}
          />
        ))}
      </div>

      {IsOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <Table activityId={activityId} showAction={false} />
        </Modal>
      )}

      {IsOpenModalAddActivity && (
        <Modal onClose={() => setIsOpenModalAddActivity(false)}>
          <FormAddActivities
            hospitalId={userId}
            activityId={activityId}
            onClose={() => setIsOpenModalAddActivity(false)}
          />
        </Modal>
      )}
    </div>
  );
}

export default DonateActivities;
