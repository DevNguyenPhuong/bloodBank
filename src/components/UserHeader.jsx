import { FaHandHoldingMedical, FaSignOutAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useLogout } from "../features/authentication/useLogout";

function UserHeader() {
  const { logout } = useLogout();

  const handleLogout = () => {
    logout();
  };

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
            <button
              className="flex gap-2 justify-center items-center no-underline text-zinc-50"
              onClick={handleLogout}
            >
              <FaSignOutAlt />
              <span>Đăng xuất</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserHeader;
