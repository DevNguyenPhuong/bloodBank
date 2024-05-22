import { Outlet } from "react-router-dom";
import UserHeader from "./UserHeader";
import UserNavigation from "./UserNavigation";

function UserLayout() {
  return (
    <>
      <UserHeader />
      <div className="flex pt-12">
        <UserNavigation />
        <Outlet />
      </div>
    </>
  );
}

export default UserLayout;
