import React, { useState, useEffect } from "react";
import Footer from "../../../components/User/Footer";
import Navbar from "../../../components/User/Navbar";

const TourDate = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [calendarDays, setCalendarDays] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);

  useEffect(() => {
    generateCalendar(selectedMonth, selectedYear);
  }, [selectedMonth, selectedYear]);

  const generateCalendar = (month, year) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();

    const daysArray = [];
    for (let i = 0; i < firstDay; i++) {
      daysArray.push(null);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      daysArray.push(day);
    }
    setCalendarDays(daysArray);
  };

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  return (
    <>
      <Navbar />
      <div className="hero-det-tour">
        <h1>Prambanan Temple</h1>
        <div className="hero-det-overlay"></div>
      </div>

      <div className="calendar-container">
        <div className="controls">
          <select id="month" value={selectedMonth} onChange={(e) => setSelectedMonth(parseInt(e.target.value))}>
            <option value="0">January</option>
            <option value="1">February</option>
            <option value="2">March</option>
            <option value="3">April</option>
            <option value="4">May</option>
            <option value="5">June</option>
            <option value="6">July</option>
            <option value="7">August</option>
            <option value="8">September</option>
            <option value="9">October</option>
            <option value="10">November</option>
            <option value="11">December</option>
          </select>
          <select id="year" value={selectedYear} onChange={(e) => setSelectedYear(parseInt(e.target.value))}>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
          </select>
        </div>
        <div className="calendar" id="calendar">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((header) => (
            <div key={header} className="day header">
              {header}
            </div>
          ))}
          {calendarDays.map((day, index) => (
            <div key={index} className={`day ${day === selectedDay ? "selected" : ""}`} onClick={() => day && handleDayClick(day)}>
              {day}
            </div>
          ))}
        </div>
        <div className="select-time">
          <label htmlFor="time">Select time</label>
          <select id="time">
            {selectedDay && (
              <option>
                {selectedDay} {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][selectedMonth]} {selectedYear}, 07:00 AM
              </option>
            )}
          </select>
        </div>
        <div className="next-button">
          <a href="number_of_guest.html">Next</a>
          <div className="accordion-item">
            <button>Numbers Of Guest</button>
          </div>
          <div className="accordion-item">
            <button>Additional Information</button>
          </div>
          <div className="accordion-item">
            <button>Payment</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TourDate;
