import { differenceInDays, differenceInMonths, differenceInYears } from "date-fns";
import React, { useState } from "react";

const App = () => {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const filteredDate = () => {
    const today = new Date();
    const selected = new Date(selectedDate);
    const days = differenceInDays(today, selected);
    const months = differenceInMonths(today, selected);
    const years = differenceInYears(today, selected);

    return `${years} Years or ${months} Months or ${days} Days`
  }

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-gray-800 text-white p-8 rounded-md">
          <h1 className="text-2xl mb-4 text-center mx-20">Age Calculator</h1>
          <div className="">
            <label
              htmlFor="date-input"
              className="block text-lg font-medium text-white mb-2"
            >
              Select a date:
            </label>
            <input
              type="date"
              id="date-input"
              value={selectedDate}
              onChange={handleDateChange}
              className="mt-1 block w-full p-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <p className="mt-4 text-white font-mono">Your DOB :  {selectedDate ? selectedDate : "Please select DOB"}</p>
          </div>
          <div className="py-10">
            <span className="text-xl">You are now:</span>
              <span className="font-mono "> {selectedDate ? filteredDate() : "Please select DOB "}</span>
          </div> 
        </div>
      </div>
    </>
  );
};

export default App;
