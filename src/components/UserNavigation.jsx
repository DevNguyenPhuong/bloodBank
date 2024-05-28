import { FaFire, FaHistory, FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function UserNavigation() {
  return (
    <div className="fixed flex-[20rem] min-h-screen text-l text-red-500 bg-red-50 p-6 font-bold  shadow-[rgba(0,0,0,0.24)_0px_3px_8px]">
      <ul className="flex flex-col gap-4 ">
        <li>
          <NavLink to="./home" className="nav-link flex gap-3 items-center">
            <FaHome />
            <span>Trang chủ</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="./activities"
            className="nav-link flex gap-3 items-center"
          >
            <FaFire />
            <span>Hoạt động đang đăng ký</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="./history" className="nav-link flex gap-3 items-center">
            <FaHistory />
            <span>Lịch sử hiến máu</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default UserNavigation;
