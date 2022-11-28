import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../images/my_logo.png";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="w-full flex md:justify-center justify-center items-center p-4">
      <div className="md:flex flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-60 cursor-pointer" />
      </div>

    </nav>
  );
};

export default Navbar;
