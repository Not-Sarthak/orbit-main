import { IoMdClose, IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";

let tabs = [
  { id: "home", label: "Home", route: "/" },
  { id: "team", label: "Team", route: "/team" },
];

function Navbar() {
  let [activeTab, setActiveTab] = useState(tabs[0].id);
  let [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
    <div className="bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]">
    <div className="flex md:flex-row items-center justify-between px-4 md:px-28 py-2">
      <Link to="/">
        <button className="flex gap-2 items-center">
          <img src={logo} alt="Logo" width={140} height={100} />
        </button>
      </Link>
      <div className="md:mt-0 md:flex items-center">
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? (
            <IoMdClose className="w-6 h-6 text-black flex justify-end" />
          ) : (
            <IoMdMenu className="w-6 h-6 text-black" />
          )}
        </div>
        <div className={`md:flex ${isMenuOpen ? 'flex flex-col' : 'hidden'}`}>
          {tabs.map((tab) => (
            <Link
              key={tab.id}
              to={tab.route}
              onClick={() => {
                setActiveTab(tab.id);
                setMenuOpen(false);
              }}
              className={`relative rounded-full px-3 py-1.5 text-sm font-medium outline-sky-400 transition focus-visible:outline-2 ${
                activeTab === tab.id
                  ? "text-black hover:text-black/60"
                  : "text-black hover:text-black/60"
              }`}
              style={{
                WebkitTapHighlightColor: "transparent",
              }}
            >
              {activeTab === tab.id && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 z-10 bg-white mix-blend-difference"
                  style={{ borderRadius: 9999 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {tab.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  </div>
  </div>
  );
}

export default Navbar;
