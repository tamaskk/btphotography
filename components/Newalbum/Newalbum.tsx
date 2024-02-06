import React, { useState } from "react";

function Newalbum() {
  const [loading, setLoading] = useState(false);
  const [albumData, setAlbumData] = useState({
    albumName: "",
    albumDate: "",
    albumEmail: "",
    albumPassword: "",
    albumLink: "",
  });

  const postData = async (e: any) => {
    e.preventDefault();

    if (
      albumData.albumName === "" ||
      albumData.albumDate === "" ||
      albumData.albumEmail === "" ||
      albumData.albumPassword === "" ||
      albumData.albumLink === ""
    ) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("api/album/newAlbum", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ albumData }),
      });

      const data = await res.json();

      if (!data.ok) {
        alert(data.message);
        setLoading(false);
        return;
      }

      setAlbumData({
        albumName: "",
        albumDate: "",
        albumEmail: "",
        albumPassword: "",
        albumLink: "",
      });
      setLoading(false);
      alert(data.message);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="w-screen md:w-[83.3vw] h-screen flex flex-col justify-start items-center pt-7 overflow-y-auto overflow-x-hidden">
      <h1 className="text-4xl mb-5 mt-12 md:mt-4">Új album létrehozása</h1>
      <div className="h-auto w-screen flex flex-col justify-center items-center">
        <div className="flex flex-col md:flex-row justify-between items-center w-5/6 md:w-full mb-4">
          <div className="w-5/6 md:w-1/2 pr-0 md:pr-8 flex flex-col items-center md:items-end justify-center">
            <h1 className="text-xl mb-3 mt-7 md:mt-0 w-full md:w-3/6 text-center">
              Album Név
            </h1>
            <input
              onChange={(e) =>
                setAlbumData({ ...albumData, albumName: e.target.value })
              }
              placeholder="Peti és Andi esküvője"
              className="border border-black py-2 px-2 text-center w-full md:w-3/6 focus:outline-none"
              value={albumData.albumName}
            />
          </div>
          <div className="w-5/6 md:w-1/2 pl-0 md:pl-8 flex flex-col items-center md:items-start justify-center">
            <h1 className="text-xl mb-3 mt-7 md:mt-0 w-full md:w-3/6 text-center">
              Album Dátuma
            </h1>
            <input
              onChange={(e) =>
                setAlbumData({ ...albumData, albumDate: e.target.value })
              }
              value={albumData.albumDate}
              type="date"
              className="border border-black py-2 px-2 w-full md:w-3/6 focus:outline-none"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center w-5/6 md:w-full mb-4">
          <div className="w-5/6 md:w-1/2 pr-0 md:pr-8 flex flex-col items-center md:items-end justify-center">
            <h1 className="text-xl mb-3 mt-7 md:mt-0 w-full md:w-3/6 text-center">
              Album Email címe
            </h1>
            <input
              onChange={(e) =>
                setAlbumData({ ...albumData, albumEmail: e.target.value })
              }
              value={albumData.albumEmail}
              placeholder="kissandrea@gmail.com"
              className="w-4/6 md:w-1/2 border border-black py-2 px-2 text-center focus:outline-none"
            />
          </div>
          <div className="w-5/6 md:w-1/2 pl-0 md:pl-8 flex flex-col items-center md:items-start justify-center">
            <h1 className="text-xl mb-3 mt-7 md:mt-0 w-full md:w-3/6 text-center">
              Album Jelszava
            </h1>
            <input
              onChange={(e) =>
                setAlbumData({ ...albumData, albumPassword: e.target.value })
              }
              value={albumData.albumPassword}
              placeholder="Budapest2024"
              className="w-4/6 md:w-1/2 border border-black py-2 px-2 text-center focus:outline-none"
            />
          </div>
        </div>
        <h1 className="text-xl mb-3 mt-7 md:mt-0 w-full md:w-3/6 text-center">
          Album Linkje
        </h1>
        <input
          onChange={(e) =>
            setAlbumData({ ...albumData, albumLink: e.target.value })
          }
          value={albumData.albumLink}
          placeholder="https://drive.google.com/asd123"
          className="w-4/6 md:w-1/2 border border-black py-2 px-2 text-center focus:outline-none"
        />
        {/* Input for selecting images */}
        <div className="flex flex-row w-5/6 md:w-2/6 justify-center items-center mt-4">
          <button
            onClick={postData}
            className={`bg-green-500 px-4 py-2 text-white rounded cursor-pointer hover:bg-green-600 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Feltöltés alatt..." : "Feltöltés"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Newalbum;
