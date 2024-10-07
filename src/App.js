import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import MainCalendar from "./components/Calendar/Calendar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <div>
        <Sidebar />
      </div>
      <div className="main-container">
        <div className="main-content">
          <div>
            <Header />
          </div>

          <div className="calendar-section">
            <MainCalendar />
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
