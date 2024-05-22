import { FaHandHoldingMedical, FaSignOutAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function UserHeader() {
  return (
    <div className="flex justify-between items-center bg-red-500 h-12 fixed w-full z-50 font-bold px-6">
      <div className="flex justify-between  my-0">
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
            <a
              href="login/login_hospital.html"
              className="flex gap-2 justify-center items-center no-underline text-zinc-50"
            >
              <FaSignOutAlt />
              <span>Đăng xuất</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserHeader;
