import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import events from "./events";
import "react-big-calendar/lib/css/react-big-calendar.css";
import axios from 'axios';



import Card from 'react-bootstrap/Card';

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

export default function ReactBigCalendar() {
  const [eventsData, setEventsData] = useState([]);
  console.log("Events", eventsData)

  const handleSelect = ({ start, end }) => {
    // console.log(start);
    // console.log(end);

    const title = window.prompt("New Event name");


    axios({
      method: "post",
      url: `http://localhost:5500/add/holiday`,
      data: {
        title:title,
        allDay:"true",
        start:start,
        end:end
      },
    }).then((response)=> {
      console.log("Done")
    })


    // console.log("data",title)
    if (title)
      setEventsData([
        ...eventsData && eventsData,
        {
          start,
          end,
          title
        }
      ]);
  };





  useEffect(() => {
    axios.get('http://localhost:5500/get/holiday')
      .then((response) => {
        // handle success
        // console.log(response.data);
        setEventsData(response.data.HolidayData)
      })
      .catch((error) => {
        console.log("Error=>", error)
      })


  }, [])


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
            events={eventsData}
            style={{ height: "100vh" }}
            onSelectEvent={(event) => alert(event.title)}
            onSelectSlot={handleSelect}
          />
        </div>
      </Card.Body>
    </Card>

  );
}
