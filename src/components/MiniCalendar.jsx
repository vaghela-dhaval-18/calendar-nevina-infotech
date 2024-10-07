import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import default styles

const MiniCalendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="mini-calendar-container">
      <Calendar
        onChange={onChange}
        value={date}
        view="month" // To only show the month view
        showNeighboringMonth={false} // Hide neighboring days
        tileClassName="mini-calendar-tile" // Custom class for styling
      />
    </div>
  );
};

export default MiniCalendar;
