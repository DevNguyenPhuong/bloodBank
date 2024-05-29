import {
  FaClipboardList,
  FaFire,
  FaHandHoldingWater,
  FaHandsHelping,
  FaHome,
  FaScroll,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

function HospitalNavigation() {
  return (
    <div className="fixed flex-[20rem] min-h-screen text-l text-red-500 bg-red-50 p-6  font-bold  shadow-[rgba(0,0,0,0.24)_0px_3px_8px]">
      <ul className="flex flex-col gap-4 ">
        <li>
          <NavLink to="./home" className="nav-link flex gap-3 items-center ">
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
            <span>Hoạt động hiến máu</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="./hospitalactivities"
            className="nav-link flex gap-3 items-center"
          >
            <FaHandsHelping />
            <span>Hoạt động đang diễn ra</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="./requireDonation"
            className="nav-link flex gap-3 items-center"
          >
            <FaHandHoldingWater />
            <span>Yêu cầu máu</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="./requestsBlood"
            className="nav-link flex gap-3 items-center"
          >
            <FaClipboardList />
            <span>Danh sách yêu cầu</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="./requestHistory"
            className="nav-link flex gap-3 items-center"
          >
            <FaScroll />
            <span>Lịch sử yêu cầu</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default HospitalNavigation;
