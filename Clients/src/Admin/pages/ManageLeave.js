import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Card from 'react-bootstrap/Card';
import {url} from '../../Utils/Config'


function ManageLeave() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
       <Card>
      <Card.Body>
         <Calendar onChange={onChange} value={value}  />
         </Card.Body>
    </Card>
   
  </div>
  )
}

export default ManageLeave