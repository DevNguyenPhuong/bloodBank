import { Outlet } from "react-router-dom";
import UserHeader from "./UserHeader";
import UserNavigation from "./UserNavigation";

function UserLayout() {
  return (
    <>
      <UserHeader />
      <div className="flex pt-12">
        <UserNavigation />
        <div className="ml-[300px]"></div>
        <Outlet />
        
      </div>
    </>
  );
}

export default UserLayout;
