import React, { useEffect, useRef, useState } from "react";
import Calendar from "react-calendar";
import classes from './calendarStyle.module.css'

const CalendarPage = () => {
  // State variables
  const [calendarEvents, setCalendarEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dataForId, setDataForId] = useState([]);
  const [choosenData, setChoosenData] = useState<{
    name: string;
    city: string;
    date: string;
    phonenumber: string;
    emailaddress: string;
  } | null>(null);

  const [layover, setLayover] = useState<boolean>(false);
  const [calendarData, setCalendarData] = useState({
    date: "",
    city: "",
    name: "",
    phonenumber: "",
    emailaddress: "",
  });

  // Fetch events data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("api/album/getCalendar");
        const data = await response.json();
        setData(data);
        setLoading(false);
        console.log(data);
      } catch (error) {
        alert("An error occurred while fetching data: " + error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Fetch data function
  // const fetchData = async () => {
  //     try {
  //         setLoading(true);
  //         const response = await axios.get('https://btphotography-50f60-default-rtdb.firebaseio.com/events.json');
  //         if (response.data === null) {
  //             setZero(true);
  //             setLoading(false);
  //             return;
  //         }
  //         setDataForId(response.data);
  //         const dataArray = Object.values(response.data);
  //         setData(dataArray);
  //     } catch (error) {
  //         alert("An error occurred while fetching data: " + error.message);
  //     } finally {
  //         setLoading(false);
  //     }
  // };

  // Post new event data
  const postData = async (e: any) => {
    e.preventDefault();
    // Gather input values
    // Check if all required fields are filled
    if (
      calendarData.city.length === 0 ||
      calendarData.date.length === 0 ||
      calendarData.emailaddress.length === 0 ||
      calendarData.name.length === 0 ||
      calendarData.phonenumber.length === 0
    ) {
      alert("Töltse ki teljesen a feltöltési adatokat");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch("api/album/newCalendar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ calendarData }),
      });
      const data = await response.json();

      if (!data.ok) {
        alert(data.message);
        return;
      }
      alert("Sikeresen felvetted a naptáradba");
      setLoading(false);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    console.log(choosenData);
    
  }, [choosenData]);

  // Delete an event
  const deleteItem = async (itemID: any) => {
    try {
      const response = await fetch("api/album/deleteItem", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemID }),
      });
      const data = await response.json();
      if (!data.ok) {
        alert(data.message);
        return;
      }
      alert("Esemény törölve");
    } catch (error) {
      alert("An error occurred while deleting the item.");
    }
  };

  // Handle viewing event details
  const handleItem = async (itemID: any) => {
    console.log(itemID);
    
    setLayover(true);
    const item = data.find((item: any) => item._id === itemID);
    if (item) {
      setChoosenData(item);
    }
  };

  // Customize tile content for calendar
  const tileContent = ({ date, view, data, handleDelete }: any) => {
    if (view !== "month") return null; // Return null if view is not 'month'

    // Filter events for the displayed date
    const eventsForDate = data?.filter((event: any) => {
      const eventDate = new Date(event.date);
      return (
        eventDate.getFullYear() === date.getFullYear() &&
        eventDate.getMonth() === date.getMonth() &&
        eventDate.getDate() === date.getDate()
      );
    });

    return (
      <ul className="h-12">
        {eventsForDate?.map((event: any) => (
          <li key={event.id}>
            <div className="flex flex-col justify-start items-center">
              {/* View event details */}
              <p
                onClick={() => handleItem(event._id)}
                className="mt-4 text-sm md:text-base"
              >
                {event.name}
              </p>
              {/* Delete event */}
              <button
                className="delete-button mt-2 rounded-lg w-1/2 py-2 text-center"
                onClick={() => {
                  if (
                    window.confirm("Are you sure you want to delete the event?")
                  ) {
                    handleDelete(event.id);
                  }
                }}
              >
                X
              </button>
            </div>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="w-screen md:w-[83.3vw] h-screen flex flex-col justify-start items-center pt-7 overflow-y-auto overflow-x-hidden pb-5">
      <h1 className="w-full text-center text-4xl mb-5 mt-12 md:mt-4">Naptár</h1>
      {/* Event input fields */}
      <div className="flex flex-col justify-center items-center w-screen md:w-[70vw]">
        <div className="w-full flex flex-col md:flex-row justify-evenly items-center">
          {/* Date input */}
          <input
            type="date"
            value={calendarData.date}
            onChange={(e) =>
              setCalendarData({ ...calendarData, date: e.target.value })
            }
            className="border border-slate-400 w-5/6 md:w-2/5 mt-7 mb-4 py-2 rounded-md text-center md:text-left"
          />
          {/* City input */}
          <input
            type="text"
            className="border border-slate-400 w-5/6 md:w-2/5 mt-7 mb-4 py-2 rounded-md text-center md:text-left"
            placeholder="City Name"
            value={calendarData.city}
            onChange={(e) =>
              setCalendarData({ ...calendarData, city: e.target.value })
            }
          />
        </div>
        <div className="w-full flex flex-col md:flex-row justify-evenly items-center">
          {/* Person's name input */}
          <input
            type="text"
            className="border border-slate-400 w-5/6 md:w-1/4 mt-7 mb-4 py-2 rounded-md text-center md:text-left"
            placeholder="Pár neve"
            value={calendarData.name}
            onChange={(e) =>
              setCalendarData({ ...calendarData, name: e.target.value })
            }
          />
          {/* Phone number input */}
          <input
            type="number"
            className="border border-slate-400 w-5/6 md:w-1/4 mt-7 mb-4 py-2 rounded-md text-center md:text-left"
            placeholder="Telefonszám"
            value={calendarData.phonenumber}
            onChange={(e) =>
              setCalendarData({ ...calendarData, phonenumber: e.target.value })
            }
          />
          {/* Email address input */}
          <input
            type="text"
            className="border border-slate-400 w-5/6 md:w-1/4 mt-7 mb-4 py-2 rounded-md text-center md:text-left"
            placeholder="Email Address"
            value={calendarData.emailaddress}
            onChange={(e) =>
              setCalendarData({ ...calendarData, emailaddress: e.target.value })
            }
          />
        </div>
      </div>
      {/* Add event button */}
      <button
        onClick={postData}
        className="w-2/6 border-none bg-lime-500 text-white py-4 rounded-lg mb-4 hover:bg-lime-600 "
      >
        Add to Calendar
      </button>
      {/* Display messages */}
      {loading && <h1 className="text-4xl mb-2">Betöltés...</h1>}
      {/* Calendar */}
      <div className="w-full h-full flex flex-col items-center justify-center">
        <Calendar
          className={classes.reactCalendar}
          value={selectedDate}
          tileContent={({ date, view }) =>
            tileContent({ date, view, data, handleDelete: deleteItem})
          }
          
        />
      </div>
      {/* Event details layover */}
      {layover && choosenData && (
        <div
          className="flex flex-col items-center justify-center absolute z-10 top-10 left-[2.5%] bg-white border border-slate-200 shadow-lg h-[calc(100vh - 5rem)] overflow-y-auto py-8 rounded-lg"
          style={{
            width: "calc(100vw - ((100vw / 100) * 5))",
            height: "calc(100vh - 5rem)",
          }}
        >
          <button
            onClick={() => setLayover((prev) => !prev)}
            className="bg-red-500 text-white rounded-full text-center px-3 py-1 absolute top-2 left-2 hover:scale-105 border-2 border-red-500 hover:bg-white hover:text-red-500 duration-200 transition-all"
          >
            X
          </button>
          <h1 className="text-xl md:text-3xl mb-5">
            Páros neve: {choosenData.name}
          </h1>
          <h1 className="text-xl md:text-3xl mb-5">
            Helyszín: {choosenData.city}
          </h1>
          <h1 className="text-xl md:text-3xl mb-5">
            Időpont:{" "}
            {new Date(choosenData.date).toLocaleDateString("hu-HU", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </h1>
          <h1 className="text-xl md:text-3xl mb-5">
            Telefonszám: {choosenData.phonenumber}
          </h1>
          <h1 className="text-xl md:text-3xl mb-5 text-center">
            Email cím: {choosenData.emailaddress}
          </h1>
        </div>
      )}
    </div>
  );
};

export default CalendarPage;
