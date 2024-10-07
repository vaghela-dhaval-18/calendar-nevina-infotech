import React, { useState } from "react";
import {
  FaHome,
  FaUser,
  FaBook,
  FaMusic,
  FaUsers,
  FaBroadcastTower,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { RiGroupLine } from "react-icons/ri";
import { IoFilter, IoSearch } from "react-icons/io5";
import { MdOutlineLibraryMusic } from "react-icons/md";
import { MdFilterNone } from "react-icons/md";
import { MdAudiotrack } from "react-icons/md";
import { IoMicOutline } from "react-icons/io5";
import { CiTrophy } from "react-icons/ci";
import { IoMdRadio } from "react-icons/io";
import { GrFormSchedule } from "react-icons/gr";
import { MdMood } from "react-icons/md";
import { CiMusicNote1 } from "react-icons/ci";
import { IoPlayCircleOutline } from "react-icons/io5";
import { RiPlayListFill } from "react-icons/ri";
import { TbBrandNeteaseMusic } from "react-icons/tb";

import "./Sidebar.css";

const Sidebar = () => {
  const [openDropdown, setOpenDropdown] = useState(null); // State to track which dropdown is open

  const toggleDropdown = (dropdown) => {
    // If the clicked dropdown is already open, close it; otherwise, open the clicked one
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        <li className="sidebar-item sidebar-li-item active">
          <FaHome />
          <a href="">Home</a>
        </li>
        <li className="sidebar-item sidebar-li-item">
          <FaUser />
          <a href="">Profile</a>
        </li>
        <li className="sidebar-item sidebar-li-item">
          <MdOutlineLibraryMusic />
          <a href="#">Library</a>
        </li>

        <li className="sidebar-item dropdown">
          <div
            onClick={() => toggleDropdown("collection")}
            className="dropdown-toggle"
          >
            <MdFilterNone />
            <a href="#">Collection</a>
            <span className="drodp-down-icon">
              {openDropdown === "collection" ? (
                <FaChevronUp />
              ) : (
                <FaChevronDown />
              )}
            </span>
          </div>
          <ul
            className={`sidebar-item dropdown-list ${
              openDropdown === "collection" ? "show" : ""
            }`}
          >
            <li className="dropdown-item">
              <RiPlayListFill />
              <a href="">Playlists</a>
            </li>
            <li className="dropdown-item">
              <MdAudiotrack />
              <a href="">Tracks</a>
            </li>
            <li className="dropdown-item">
              <IoMicOutline />
              <a href="">Artists</a>
            </li>
            <li className="dropdown-item">
              <IoPlayCircleOutline />
              <a href="">Albums</a>
            </li>
            <li className="dropdown-item">
              <TbBrandNeteaseMusic />
              <a href="">Genres</a>
            </li>
            <li className="dropdown-item">
              <a href="">Decades</a>
            </li>
            <li className="dropdown-item">
              <a href="">Geos</a>
            </li>
          </ul>
        </li>
        <li className="sidebar-item sidebar-li-item">
          <span>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="20"
              height="20"
            >
              <circle cx="12" cy="12" r="10" fill="#fff" />
              <circle cx="12" cy="8" r="2" fill="#000" />
              <circle cx="16" cy="12" r="2" fill="#000" />
              <circle cx="8" cy="12" r="2" fill="#000" />
            </svg>
          </span>
          <a href="">Community</a>
        </li>

        <li className="sidebar-item dropdown">
          <div
            onClick={() => toggleDropdown("stations")}
            className="dropdown-toggle"
          >
            <IoMdRadio />
            <a href="#">Stations</a>
            <span className="drodp-down-icon">
              {openDropdown === "stations" ? (
                <FaChevronUp />
              ) : (
                <FaChevronDown />
              )}
            </span>
          </div>
          <ul
            className={`dropdown-list ${
              openDropdown === "stations" ? "show" : ""
            }`}
          >
            <li className="dropdown-item">
              <GrFormSchedule />
              <a href="">Scheduled listening</a>
            </li>
            <li className="dropdown-item">
              <IoSearch />
              <a href="">Music Discovery</a>
            </li>
            <li className="dropdown-item">
              <CiMusicNote1 />
              <a href="">Positive music</a>
            </li>
            <li className="dropdown-item">
              <MdMood />
              <a href="">Mood regulation</a>
            </li>
          </ul>
        </li>

        <li className="sidebar-item dropdown">
          <div
            onClick={() => toggleDropdown("performance")}
            className="dropdown-toggle"
          >
            <CiTrophy />
            <a href="#">Performance</a>
            <span className="drodp-down-icon">
              {openDropdown === "performance" ? (
                <FaChevronUp />
              ) : (
                <FaChevronDown />
              )}
            </span>
          </div>
          <ul
            className={`dropdown-list ${
              openDropdown === "performance" ? "show" : ""
            }`}
          >
            <li className="dropdown-item">
              <CiCalendar />
              <a href="">Calendar</a>
            </li>
            <li className="dropdown-item">
              <RiGroupLine />
              <a href="">Groups</a>
            </li>
            <li className="dropdown-item">
              <IoFilter />
              <a href="">Music analysis</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
