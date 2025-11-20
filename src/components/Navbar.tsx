import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";

const Navbar = ({ onSidebarHide, title, onLogout, onShowStudent }) => {
  return (
    <nav className="bg-blue-500 flex justify-between text-white py-1">
      <div className="ps-2">
        <button
          onClick={() => {
            onSidebarHide();
          }}
        >
          <MenuIcon />
        </button>

        <span className="ps-2">{title}</span>
      </div>
      <div>
        <Link className="mx-2" to={"/"}>
          Home
        </Link>
        {/* Student link */}
        <button
          className="mx-2 text-white hover:underline"
          onClick={() => onShowStudent(true)}
        >
          Student
        </button>
        <button
          className="px-2"
          onClick={() => {
            onLogout();
          }}
        >
          <LogoutIcon />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
