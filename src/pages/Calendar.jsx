import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { scheduleData } from "../data/dummy";
import { Header } from "../components";
import "../App.css";
const Calendar = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 dark:bg-secondary-dark-bg  bg-gray-200 rounded-3xl">
      <Header category="App" title="Calendar" />
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "today prev,next", // will normally be on the left. if RTL, will be on the right
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay", // will normally be on the right. if RTL, will be on the left
        }}
        events={scheduleData}
      />
    </div>
  );
};

export default Calendar;
