import { useState } from "react";
import Modal from "../../components/Modal";
import Table from "../../components/Table";
import { useSelector } from "react-redux";
import { useGetAcitivitiesByHospitalId } from "../../features/hospital/useGetAcitivitiesByHospitalId";
import HospitalAcitivityItem from "../../features/hospital/HospitalAcitivityItem";

function HospitalActivities() {
  const [IsOpenModal, setIsOpenModal] = useState(false);
  const [activityId, setActivityId] = useState("");
  const { userId } = useSelector((store) => store.user);
  const status = 1;
  const { hospitalActivities, isLoading } =
    useGetAcitivitiesByHospitalId(userId,status);

  if (isLoading) return <div>Loading...</div>;

  function handleModal(activityIdx) {
    setIsOpenModal(!IsOpenModal);
    setActivityId(activityIdx);
  }

  return (
    <div className="w-full">
      <div className="mt-12 items-center flex flex-col gap-5">
        {hospitalActivities.map((item, index) => (
          <HospitalAcitivityItem
            {...item}
            key={item.id}
            onOpenModal={handleModal}
          />
        ))}
      </div>

      {IsOpenModal && (
        <Modal onClose={() => setIsOpenModal(!IsOpenModal)}>
          <Table activityId={activityId} showAction={true} />
        </Modal>
      )}
    </div>
  );
}

export default HospitalActivities;
