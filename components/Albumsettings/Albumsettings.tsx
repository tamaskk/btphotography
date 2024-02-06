import React, { useEffect, useState } from "react";

function Albumsettings() {
  // State variables
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [view, setView] = useState(false);
  const [choosenData, setChoosenData] = useState({
    id: "",
    albumName: "",
    albumDate: "",
    albumEmail: "",
    albumPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  // Fetch album data on component mount

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch("api/album/getAllAlbums");
        const data = await res.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Delete an album item
  const deleteItem = async (itemID: any) => {
    const confirmDelete = window.confirm('Biztosan törölni szeretnéd ezt az albumot?');

    if (!confirmDelete) {
        return;
    }

    try {
        const res = await fetch('api/album/deleteItem', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify( {itemID} ),
        });

        const data = await res.json();

        if (!data.ok) {
            console.log(data.message);
            return;
        }
        setView(false);
        alert('Album törölve');

    } catch (error) {
        alert(error);
    }

  };

  // Handle viewing an album's details
  const handleItem = async (itemID: any) => {
    
    setView(true);
    const item = data.find((item: any) => item._id === itemID);
  
    if (item) {
      setChoosenData({
        id: item._id,
        albumName: item.albumName,
        albumDate: item.albumDate,
        albumEmail: item.albumEmail,
        albumPassword: item.albumPassword,
      });
    } else {
      // Log an error message to the console
      console.error(`Item with ID ${itemID} not found`);
    }
  };
  
  

  return (
    <div className="w-screen md:w-[83.3vw] h-screen flex flex-col justify-start items-start pt-7 overflow-y-auto overflow-x-hidden pb-5">
      <h1 className="w-full text-center text-4xl mb-5 mt-14 md:mt-4">
        Albumok szerkeztése
      </h1>
      {!view && (!data || Object.values(data).length === 0) && (
        <h1 className="w-full text-center text-2xl mb-4">
          Nincs megjeleníthető album.
        </h1>
      )}

      {!view && data && Object.values(data).length > 0 && (
        <div className="w-full flex flex-row flex-wrap gap-4 px-4 md:px-10 pt-4 relative z-1">
          {data.map((item: any) => (
            <div
              key={item.id}
              className="relative shadow-xl z-[1] md:z-1 bg-white rounded-lg w-auto p-3 flex flex-col justify-center items-center h-auto pt-5"
            >
              <button
                className="border border-red-600 bg-red-600 absolute top-[-5px] right-[-5px] text-white px-2 rounded-full hover:bg-white hover:text-red-600 transition-all duration-200"
                onClick={() => deleteItem(item._id)}
              >
                X
              </button>
              <h1 className="text-lg mt-2 mb-8">{item.albumName}</h1>
              <h1 className="mb-8">{item.albumDate}</h1>
              <button
                className="w-full text-white py-3 px-2 rounded-lg bg-gradient-to-r from-[#1ab093] to-[#94c83f] hover:opacity-80 transition-all duration-200"
                onClick={() => handleItem(item._id)}
              >
                Adatok megtekintése
              </button>
            </div>
          ))}
        </div>
      )}

      {/* View album details */}
      {view ? (
                <div className='w-full md:w-[83.3vw] h-auto flex flex-col items-center justify-start'>
                    <h1 className='text-2xl mb-2'>Album neve: {choosenData.albumName}</h1>
                    <h1 className='text-2xl mb-2'>Album dátuma: {choosenData.albumDate}</h1>
                    <h1 className='text-2xl mb-2'>Email: {choosenData.albumEmail}</h1>
                    <h1 className='text-2xl mb-2'>Jelszó: {!showPassword ? "*".repeat(choosenData.albumPassword.length) : choosenData.albumPassword}</h1>
                    <div className='flex flex-col md:flex-row gap-5'>
                        <button onClick={() => setView(false)} className='relative z-1 py-2 px-5 border-2 border-green-400 cursor-pointer mt-3 hover:bg-green-400 hover:text-white transition-all duration-300 rounded-sm'>
                            Vissza
                        </button>
                        <button className='relative z-1 py-2 px-5 border-2 border-blue-400 cursor-pointer mt-3 hover:bg-blue-400 hover:text-white transition-all duration-300 rounded-sm' onClick={() => setShowPassword(prev => !prev)}>
                            Mutasd a jelszót
                        </button>
                        <button onClick={() => alert('Adatok kiküldve')} className='relative z-1 py-2 px-5 border-2 border-orange-400 cursor-pointer mt-3 hover:bg-orange-400 hover:text-white transition-all duration-300 rounded-sm'>
                            Elfelejtett adatok kiküldése
                        </button>
                        <button onClick={() => deleteItem(choosenData.id)} className='relative z-1 py-2 px-5 border-2 border-red-400 cursor-pointer mt-3 hover:bg-red-400 hover:text-white transition-all duration-300 rounded-sm'>
                            Album törlése
                        </button>
                    </div>
                </div>
            ) : null}

      {/* Loading message */}
      {loading && <h1 className="w-full text-center">Betöltés...</h1>}
    </div>
  );
}

export default Albumsettings;
