import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { useMainContext } from '@/lib/mainContext';
import Newalbum from '../Newalbum/Newalbum';
import Albumsettings from '../Albumsettings/Albumsettings';
import CalendarPage from '../Calendar/Calendar';

const Dashboard = () => {

  const { choosenPanel } = useMainContext();

  const panel = () => {
    switch (choosenPanel) {
      case "Új album":
        return <Newalbum />;
      case "Album beállítások":
        return <Albumsettings />;
      case "Naptár":
        return <CalendarPage />;
      default:
        return null; // Add a default case or handle unknown panels
    }
  };

  return (
    <div className='w-screen h-screen max-w-screen max-h-screen'>
      {panel()}
    </div>
  )
}

export default Dashboard