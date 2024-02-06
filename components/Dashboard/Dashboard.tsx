import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { useMainContext } from '@/lib/mainContext';
import Newalbum from '../Newalbum/Newalbum';
import Calendar from '../Calendar/Calendar';
import Albumsettings from '../Albumsettings/Albumsettings';

const Dashboard = () => {

  const { choosenPanel } = useMainContext();

  const panel = () => {
    switch (choosenPanel) {
      case "Új album":
        return <Newalbum />;
      case "Album beállítások":
        return <Albumsettings />;
      case "Naptár":
        return <Calendar />;
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