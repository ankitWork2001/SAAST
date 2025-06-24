import React from 'react';

// componet is imported here 
import UserTable from "./component/UserTable.jsx";

function Dashboard() {
  return (
    <>
      <div className=' p-10 flex flex-col gap-5'>
        <span className='text-4xl font-bold'>Dashboard</span>
        <div className='flex justify-evenly'>

          <div className='bg-[#0594BB] w-[20rem] h-[10rem] flex flex-col rounded-2xl pl-10 pt-4'>
            <span className='text-[1.8rem] font-bold'>Total User</span>
            <span className='text-[3rem] font-bold'>12,532</span>
          </div>

          <div className='bg-[#0594BB] w-[20rem] h-[10rem] flex flex-col rounded-2xl pl-10 pt-4'>
            <span className='text-[1.8rem] font-bold'>Total Subscriptions</span>
            <span className='text-[3rem] font-bold'>6,829</span>
          </div>

          <div className='bg-[#0594BB] w-[20rem] h-[10rem] flex flex-col rounded-2xl pl-10 pt-4'>
            <span className='text-[1.8rem] font-bold'>Total Review</span>
            <span className='text-[3rem] font-bold'>8,645</span>
          </div>

          <div className='bg-[#0594BB] w-[20rem] h-[10rem] flex flex-col rounded-2xl pl-10 pt-4'>
            <span className='text-[1.8rem] font-bold'>Revenue</span>
            <span className='text-[3rem] font-bold'>$23,450</span>
          </div>

        </div>

        <div className='px-10 py-5 flex flex-col rounded-2xl bg-white/10'>
          <div className='flex justify-between w-full'>
            <span className='text-2xl'>Revenue Over Time</span>
            <div className='flex gap-8'>
              <button className='px-4 py-1 h-10 rounded bg-[#0594BB]'>Monthly</button>
              <button className='px-4 py-1 h-10 rounded bg-[#0594BB]'>This Month</button>
            </div>
          </div>


          {/* /// chart is here  */}
          <div className='h-[20rem] w-full mt-7  flex justify-center items-center m-auto '>
            <span className="text-5xl uppercase">Chart</span>
          </div>
        </div>

        <div className='px-10 py-5 flex flex-col rounded-2xl bg-white/10'>
          <UserTable/>
        </div>
      </div>
    </>
  )
}

export default Dashboard