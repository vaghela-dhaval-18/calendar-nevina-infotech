import React, { useState, useEffect, useMemo } from "react";
import { CiLock } from "react-icons/ci";
import { Switch, useMediaQuery, useTheme } from "@mui/material";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import moment from "moment";

import "./Calendar.css";

const MainCalendar = () => {
  const generateEvents = () => {
    const events = [];
    const today = moment();
    const statuses = ["To be Played", "Canceled", "Pending"];
    for (let i = -7; i <= 1; i++) {
      const date = moment(today).add(i, 'days');
      const startTime1 = date.clone().set({ hour: 9, minute: 0 });
      const endTime1 = startTime1.clone().add(1, 'hour');
      const startTime2 = date.clone().set({ hour: 14, minute: 30 });
      const endTime2 = startTime2.clone().add(1, 'hour');

      events.push({
        title: `Meeting ${i + 8}A`,
        start: startTime1.toDate(),
        end: endTime1.toDate(),
        description: `Description for Meeting ${i + 8}A`,
        location: `Location ${i + 8}A`,
        color: '#3788d8',
        status: statuses[Math.floor(Math.random() * statuses.length)]
      }, {
        title: `Meeting ${i + 8}B`,
        start: startTime2.toDate(),
        end: endTime2.toDate(),
        description: `Description for Meeting ${i + 8}B`,
        location: `Location ${i + 8}B`,
        color: '#ff9f89',
        status: statuses[Math.floor(Math.random() * statuses.length)]
      });
    }
    return events;
  };

  const events = useMemo(() => generateEvents(), []);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [calendarHeight, setCalendarHeight] = useState('800px');

  useEffect(() => {
    const updateHeight = () => {
      setCalendarHeight(`${window.innerHeight - 200}px`);
    };

    window.addEventListener('resize', updateHeight);
    updateHeight();

    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  const eventContent = (eventInfo) => {
    const overlappingEvents = events.filter(event => 
      event.start < eventInfo.event.end && event.end > eventInfo.event.start
    );
    const isOverlapping = overlappingEvents.length > 1;
    
    return (
      <div style={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        padding: '2px',
        backgroundColor: isOverlapping ? eventInfo.event.backgroundColor : 'transparent',
        color: isOverlapping ? 'white' : 'inherit',
        borderRadius: '4px'
      }}>
        <b>{eventInfo.event.title}</b>
        <small>{eventInfo.event.extendedProps.status}</small>
      </div>
    );
  };

  return (
    <>
      <div className="calendar-main">
        <h2>Calendar</h2>
        <div className="header-controls">
          <div>
            <CiLock />
          </div>
          <div>
            <h3>Google Calendar </h3>
          </div>
          <div>
            <Switch />
          </div>
        </div>
      </div>
      <p className="underline"></p>
      <div style={{ height: calendarHeight, width: '100%', padding: '20px' }}>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView={isMobile ? "timeGridDay" : "timeGridWeek"}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: isMobile ? 'timeGridDay,dayGridMonth' : 'dayGridMonth,timeGridWeek,timeGridDay'
          }}
          events={events}
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={false}
          slotMinTime="00:00:00"
          slotMaxTime="24:00:00"
          allDaySlot={true}
          height="100%"
          expandRows={true}
          stickyHeaderDates={true}
          nowIndicator={true}
          eventDisplay="block"
          eventTimeFormat={{
            hour: 'numeric',
            minute: '2-digit',
            meridiem: 'short'
          }}
          slotLabelFormat={{
            hour: 'numeric',
            minute: '2-digit',
            omitZeroMinute: false,
            meridiem: 'short'
          }}
          views={{
            timeGrid: {
              eventMinHeight: 40,
              slotEventOverlap: true,
              allDaySlot: true,
              allDayText: 'All Day'
            }
          }}
          eventContent={eventContent}
        />
      </div>
    </>
  );
};

export default MainCalendar;