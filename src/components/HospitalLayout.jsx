import { Outlet } from "react-router-dom";
import HospitalHeader from "./HospitalHeader";
import HospitalNavigation from "./HospitalNavigation";

function HospitalLayout() {
  return (
    <>
      <HospitalHeader />
      <div className="flex pt-12">
        <HospitalNavigation />
        <div className="ml-[300px]"></div>
        <Outlet />
        
      </div>
    </>
  );
}

export default HospitalLayout;
