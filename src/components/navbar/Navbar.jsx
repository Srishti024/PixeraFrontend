import "./navbar.scss";
import RightBar from "../rightBar/RightBar";
import React, { useState, useContext } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {
  const { darkMode, toggle } = useContext(DarkModeContext);
  const { currentUser, logout } = useContext(AuthContext);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Pixera</span>
        </Link>
        <Link to="/" style={{ cursor: "pointer" }}onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <HomeOutlinedIcon />
        </Link>

        {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toggle} />
        ) : (
          <DarkModeOutlinedIcon onClick={toggle} />
        )}

        <MenuIcon
          className="menuIcon"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        />

     <Link
  to={`/profile/${currentUser?.id || "1"}`}
  style={{ color: "inherit" }}
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
>
  <PersonOutlinedIcon style={{ cursor: "pointer" }} />
</Link>

        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>

      <div className="right">
        {currentUser ? (
          <>
            <span>Welcome, User</span>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <span>Please log in</span>
        )}

        <GridViewOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />

        <div className="user">
          <img
            src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt="profile"
          />
        </div>
      </div>

      {/* ✅ Move this outside of .right to ensure it's always visible */}
      {showMobileMenu && (
        <div className="mobileRightMenu">
          <RightBar />
        </div>
      )}
    </div>
  );
};

export default Navbar;
