import React from 'react';

// icon is import here 
import { FaRegUserCircle } from "react-icons/fa";
import { TiArrowRightThick } from "react-icons/ti";

/// import button from ui
import Button from './component/Button';
import Graph from './component/Graph';
import Notification from './component/Notification';
import Table from './component/Table';


function Dashboard() {
  return (
    <>
      <div className='w-full m-h-screen snap-none p-5 flex flex-col justify-center items-center m-auto'>

        <div className='flex gap-12 w-full p-5'>
          <Button title="Details" value="340" icon={<FaRegUserCircle />} />
          <Button title="Details" value="340" icon={<FaRegUserCircle />} />
          <Button title="Details" value="340" icon={<FaRegUserCircle />} />
          <Button title="Details" value="340" icon={<FaRegUserCircle />} />
        </div>
        <div className='grid grid-cols-2 p-10 gap-20 w-full '>
          <div className='bg-[#0A0E23B5] p-10 rounded-3xl'>
            <Graph />
          </div>
          <div className='bg-[#0A0E23B5] p-8 rounded-3xl'>
            <Notification />
          </div>
        </div>

        <div className='bg-[#0A0E23B5] py-5 px-12 rounded-3xl w-[73vw] flex flex-col gap-5'>
          <div>
            <span className='text-3xl font-bold'>Notification</span>
            <div className='flex gap-3 text-xl font-medium mt-1'>
              <TiArrowRightThick className='text-2xl  text-green-500' />
              <span>This Month</span>
            </div>
          </div>
          <div>
            <Table />
          </div>
        </div>

      </div>
    </>
  )
}

export default Dashboard