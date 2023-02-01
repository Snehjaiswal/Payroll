import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import events from "./events";
import "react-big-calendar/lib/css/react-big-calendar.css";

import Card from 'react-bootstrap/Card';

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

export default function ReactBigCalendar() {
  // const [eventsData, setEventsData] = useState(events);

  // const handleSelect = ({ start, end }) => {
  //   console.log(start);
  //   console.log(end);
  //   const title = window.prompt("New Event name");
  //   if (title)
  //     setEventsData([
  //       ...eventsData,
  //       {
  //         start,
  //         end,
  //         title
  //       }
  //     ]);
  // };
  return (
    <Card style={{ "height": "700px !important" }}>
      <Card.Body style={{ "height": "700px !important" }}>
        <div className="App">
          <Calendar
            views={["day", "agenda", "work_week", "month"]}
            selectable
            localizer={localizer}
            defaultDate={new Date()}
            defaultView="month"
            // events={eventsData}
            style={{ height: "100vh" }}
            onSelectEvent={(event) => alert(event.title)}
            // onSelectSlot={handleSelect}
          />
        </div>
      </Card.Body>
    </Card>

  );
}
