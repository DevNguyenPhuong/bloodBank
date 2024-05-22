import { Outlet } from "react-router-dom";
import HospitalHeader from "./HospitalHeader";
import HospitalNavigation from "./HospitalNavigation";

function HospitalLayout() {
  return (
    <>
      <HospitalHeader />
      <div className="flex pt-12">
        <HospitalNavigation />
        <Outlet />
      </div>
    </>
  );
}

export default HospitalLayout;
