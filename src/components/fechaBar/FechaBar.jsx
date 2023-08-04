import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './FechaBar.scss'

function FechaBar() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className='calendar-conteiner'>
      <label htmlFor="calendar">Fecha</label>
      <DatePicker
        className='datepiker'
        id="calendar"
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
      />
      
    </div>
  );
}

export default FechaBar;