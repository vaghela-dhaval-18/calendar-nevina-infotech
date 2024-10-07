import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="header-tabs">
          <button className="tab active">All</button>
          <button className="tab">Listening</button>
          <button className="tab">Learning</button>
          <button className="tab">Rehearsal</button>
          <button className="tab">Perform</button>
        </div>
        <div className="header-profile">
          <button className="profile-button">
            <i className="fas fa-ellipsis-v"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
