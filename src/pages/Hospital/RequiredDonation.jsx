import FormDonation from "../../components/FormDonation";

function RequiredDonation() {
  return (
    <div className="flex items-center flex-col justify-center w-full">
      <h1 className="font-bold text-2xl text-red-500 mb-5">Yêu cầu máu</h1>
      <FormDonation />
    </div>
  );
}

export default RequiredDonation;
