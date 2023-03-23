import React from "react";
import moment from "moment";

const Calendar = ({ date }) => {
  // get moment object for the provided date
  const month = moment(date);
  // get the number of days in the month
  const daysInMonth = month.daysInMonth();
  // get the first day of the month
  const firstDayOfMonth = moment(date).startOf("month");
  // get the starting day of the calendar (Sunday)
  const startingDay = moment(firstDayOfMonth).startOf("week");

  // create an array of days in the month
  const days = [];
  for (let i = 0; i < daysInMonth; i++) {
    days.push(moment(firstDayOfMonth).add(i, "days"));
  }

  return (
    <div className="w-96 mx-auto mt-10 bg-white shadow-md rounded-lg">
      <div className="flex justify-center items-center px-4 py-2 bg-gray-200 rounded-t-lg">
        <span>{month.format("MMMM YYYY")}</span>
      </div>
      <div className="flex items-center justify-around px-4 py-2 bg-gray-100 rounded-t-lg">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
          <div key={day} className="text-gray-600 font-medium mx-1">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2 p-4">
        {Array.from({ length: 6 }, (_, row) => {
          return Array.from({ length: 7 }, (_, col) => {
            const day = moment(startingDay).add(row * 7 + col, "days");
            const isCurrentMonth = day.month() === month.month();
            const className = [
              "text-center",
              "p-2",
              "rounded-full",
              isCurrentMonth ? "bg-gray-200" : "bg-gray-100",
              day.isSame(date, "day") ? "text-white bg-blue-600" : ""
            ].join(" ");
            return (
              <div key={day} className={className}>
                {isCurrentMonth && day.date()}
              </div>
            );
          });
        })}
      </div>
    </div>
  );
};

export default Calendar;
