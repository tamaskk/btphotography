import React, { useEffect, useRef, useState } from "react";
// import { useMainContext } from "./Maincontext";
import pictureForAlbums from "../../assets/logo_sima.png";
import { useMainContext } from "@/lib/mainContext";
import Image from "next/image";
import crypto from "bcryptjs";

function OverLay({ children }: any) {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex flex-row justify-center items-center z-50">
      {children}
    </div>
  );
}


function Album() {
  // State variables
  const [data, setData] = useState([]);
  const [choosenData, setChoosenData] = useState({
    albumName: "",
    albumDate: "",
    albumEmail: "",
    albumPassword: "",
    albumLink: "",
  });
  const [loading, setLoading] = useState(false);
  const [filteredDate, setFilteredDate] = useState<any>();
  const [loggedIn, setLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordLayout, setPasswordLayout] = useState(false);

  // Fetch album data on component mount
  useEffect(() => {
    const fetchData = async () => {
        try {

            setLoading(true);
            const res = await fetch("api/album/getAllAlbums");
            const data = await res.json();
            console.log(data);
            setData(data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    fetchData();
  }, []);

  useEffect(() => {
    console.log(choosenData);
    
  }, [choosenData]);

  const loginHandler = () => {
    const compare = crypto.compareSync(password, choosenData.albumPassword);

    if (compare) {
      setLoggedIn(true);
      setPasswordLayout(false);
    } else {
      alert("Hibás jelszó");
    }

  };

  const setChoosenDataHandler = (data: any) => {
    setChoosenData(data);
    setPasswordLayout(true);
  }

  // Close password layout
  const closePasswordLayoutHandler = () => {
    // setPasswordLayout(false);
  };

  return (
    <div className="w-screen h-screen overflow-y-auto overflow-x-hidden flex flex-col items-center justify-start bg-cyan-50">
      {/* Album title and search */}
      <h1 className="text-5xl mb-10 mt-2">Albumok</h1>
      <h1 className="text-2xl mb-6 text-center">
        Keressen rá a szűrő segítségével az ön albumára.
      </h1>
      <input
        type="date"
        onChange={(e) => setFilteredDate(e.target.value)}
        className="px-2 py-3 mb-5 border-black border"
      />

      {/* Album items */}
      <div className="grid grid-cols-5 gap-5 justify-between items-center px-3 mb-10">
        {data &&
          Object.values(data)
            .filter((item: any) => !filteredDate || item.albumDate === filteredDate)
            .map((item: any) => (
              <div
                key={item.id}
                className="w-full shadow-black shadow-lg rounded-xl flex flex-col items-center justify-start bg-white"
              >
                {/* Album cover */}
                <Image
                src={pictureForAlbums}
                  alt="Album Cover"
                  className="w-full rounded-t-xl mb-2 max-w-72 p-4"
                />
                <h1 className="text-xl">{item.albumName}</h1>
                <h1 className="mb-3">{item.albumDate}</h1>
                {/* Button to access album images */}
                <button
                  onClick={() => setChoosenDataHandler(item)}
                  className="bg-green-100 py-2 px-2 mb-2 rounded-md hover:bg-blue-300 transition-all duration-200 hover:text-white"
                >
                  Bejelentkezés a képekhez
                </button>
              </div>
            ))}
        {/* Display a message if no albums */}
        {data && Object.values(data).length === 0 && (
          <h1 className="text-xl w-screen text-center">
            Nincs megjeleníthető album.
          </h1>
        )}
      </div>

      {/* Loading message */}
      {loading && <h1 className="mb-10 text-6xl">Albumok betöltése</h1>}

      {/* Password layout */}
      {passwordLayout && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex flex-row justify-center items-center z-50">
          <div className="absolute flex flex-col mb-3 justify-center items-center py-2 px-3 text-black text-3xl rounded-lg font-semibold bg-white w-[80%] h-3/5 md:h-2/3 md:w-2/3">
            <button
              onClick={() => setPasswordLayout(false)}
              className="bg-red-500 text-white rounded-full text-center px-3 py-1 absolute top-2 right-2 hover:scale-105 border-2 border-red-500 hover:bg-white hover:text-red-500 duration-200 transition-all"
            >
              X
            </button>
            <h1>Jelszó:</h1>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className={`border border-black py-1 px-1 md:py-3 md:px-3 mt-8 rounded-lg w-5/6`}
            />
            <button
              onClick={() => loginHandler()}
              className="bg-gradient-to-r from-green-600 to-lime-600 text-white hover:scale-105 rounded-lg transition-all duration-500 text-lg px-4 py-2 mt-7"
            >
              Bejelentkezés az albumba
            </button>
          </div>
        </div>
      )}

      {/* Display album images */}
      {loggedIn && (
        <div
          className="flex flex-col items-center justify-start absolute z-10 top-10 left-[2.5%] gap-6 bg-gray-100 border border-gray-500 h-auto overflow-y-auto py-8 rounded-lg"
          style={{
            width: "calc(100vw - ((100vw / 100) * 5))",
            maxHeight: "calc(100vh - 40px)",
          }}
        >
          <button
            onClick={() => setLoggedIn(false)}
            className="bg-red-500 text-white rounded-full text-center px-3 py-1 absolute top-2 right-2 hover:scale-105 border-2 border-red-500 hover:bg-white hover:text-red-500 duration-200 transition-all"
          >
            X
          </button>
          <h1 className="text-2xl font-semibold">{choosenData.albumName}</h1>
          <p className="text-gray-500 italic">(Az alábbi linkre kattintva megtudod tekinteni)</p>
          <a href={choosenData.albumLink} target="_blank" className="mb-5 text-blue-500 underline hover:text-blue-700 transition-all duration-300">{choosenData.albumLink}</a>
        </div>
      )}
    </div>
  );
}

export default Album;
