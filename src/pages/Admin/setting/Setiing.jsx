import React from 'react'

//icons 
import { FaRegUserCircle } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import { FaBell } from "react-icons/fa";
import { MdMonitor } from "react-icons/md";


//admin components 
import Box from '../components/Box';


function Setiing() {
  return (
    <>
      <div className=' p-10 flex flex-col gap-5'>
        <span className='text-4xl font-bold ml-10'>Settings</span>

        <div className='grid grid-cols-2 mt-6 gap-y-10 w-[61vw] ml-10'>
         <Box icon=<FaRegUserCircle/> title="Profile" pera="Manage your account information"/>
         <Box icon=<CiLock/> title="Security" pera="Update your account and secure your account"/>
         <Box icon=<FaBell/> title="Notification" pera="Customize notification preferences"/>
         <Box icon=<MdMonitor/> title="Appearance" pera="Personalize the interface theme"/>
        </div>

      </div>
    </>
  )
}

export default Setiing