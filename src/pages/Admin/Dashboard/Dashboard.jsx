import React, { useEffect, useState } from "react";
import axios from "axios";


// componet is imported here 
import UserTable from "./component/UserTable.jsx";

function Dashboard() {

  const [data, setData] = useState({
    totalUsers: 0,
    totalSubscriptions: 0,
    totalrevenue: 0,
    recentUsers: [],
  });

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:3000/api/admin/dashboard", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.data.success) {
          setData(res.data);
        } else {
          console.error("API returned success: false");
        }
      } catch (err) {
        console.error("Failed to fetch dashboard data:", err);
      }
    };

    fetchDashboardData();
  }, []);


  return (
    <>
      <div className=' p-10 flex flex-col gap-5'>
        <span className='text-4xl font-bold'>Dashboard</span>
        <div className='flex justify-evenly'>

          <div className='bg-[#0594BB]/70 w-[20rem] h-[10rem] flex flex-col rounded-2xl pl-10 pt-4'>
            <span className='text-[1.8rem] font-bold'>Total User</span>
            <span className='text-[3rem] font-bold'>{data.totalUsers}</span>
          </div>

          <div className='bg-[#0594BB]/70 w-[20rem] h-[10rem] flex flex-col rounded-2xl pl-10 pt-4'>
            <span className='text-[1.8rem] font-bold'>Total Subscriptions</span>
            <span className='text-[3rem] font-bold'>{data.totalSubscriptions}</span>
          </div>

          <div className='bg-[#0594BB]/70 w-[20rem] h-[10rem] flex flex-col rounded-2xl pl-10 pt-4'>
            <span className='text-[1.8rem] font-bold'>Total Review</span>
            <span className='text-[3rem] font-bold'>0</span>
          </div>

          <div className='bg-[#0594BB]/70 w-[20rem] h-[10rem] flex flex-col rounded-2xl pl-10 pt-4'>
            <span className='text-[1.8rem] font-bold'>Revenue</span>
            <span className='text-[3rem] font-bold'>{data.totalrevenue}</span>
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
          <UserTable users={data.recentUsers} />
        </div>
      </div>
    </>
  )
}

export default Dashboard