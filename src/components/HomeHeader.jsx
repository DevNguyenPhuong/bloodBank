import {
  FaHandHoldingMedical,
  FaHome,
  FaHospital,
  FaUser,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

function HomeHeader() {
  return (
    <div className="flex justify-between items-center bg-red-500 h-12 fixed w-full z-50 font-bold px-6">
      <div className="flex justify-between mx-3.5 my-0">
        <NavLink
          to="/"
          className="flex gap-2 justify-center items-center no-underline text-zinc-50"
        >
          <FaHandHoldingMedical />
          <span>Ngân hàng máu</span>
        </NavLink>
      </div>
      <div className="flex justify-between mx-3.5 my-0">
        <ul className="gap-8 flex">
          <li>
            <NavLink
              to="/"
              className="flex gap-2 justify-center items-center no-underline text-zinc-50"
            >
              <FaHome />
              <span>Trang chủ</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user"
              className="flex gap-2 justify-center items-center no-underline text-zinc-50"
            >
              <FaUser />
              <span>Người dùng</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/hospital"
              className="flex gap-2 justify-center items-center no-underline text-zinc-50"
            >
              <FaHospital />
              <span>Bệnh viện</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HomeHeader;
