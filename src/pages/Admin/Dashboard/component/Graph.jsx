import React from 'react';
import { FaRegUserCircle } from "react-icons/fa";


import Bar from "./Bar.jsx"

const Graph = () => {
    return (
        <div className='overflow-hidden'>
            <div className='flex w-full'>
                <div className='flex w-full flex-col gap-2 text-xl'>
                    <span>500</span>
                    <span>400</span>
                    <span>300</span>
                    <span>200</span>
                    <span>100</span>
                    <span>0</span>
                </div>
                <div className='flex gap-14'>
                    <Bar progress={70} />
                    <Bar progress={40} />
                    <Bar progress={75} />
                    <Bar progress={60} />
                    <Bar progress={30} />
                    <Bar progress={36} />
                    <Bar progress={100} />
                    <Bar progress={92} />
                    <Bar progress={67} />
                </div>
            </div>
            <div>
                <div className='flex gap-5 text-xl mt-3'>
                    <span className='text-2xl font-bold'>Active Employee</span>
                    <div className='bg-blue-600 px-3 rounded text-xl font-medium'>This Year</div>
                </div>
                <div className='flex gap-10'>
                    <div className='flex w-40 mt-5'>
                        <div className='text-xl text-white bg-blue-600 h-8 w-8 rounded mr-4'><FaRegUserCircle className='justify-center items-center m-auto mt-1' /></div>
                        <div className='flex flex-col'>
                            <span className='text-xl text-[#A0AEC0]'>Employee</span>
                            <div>
                                <span className='text-xl font-bold'>120</span>
                                <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                                    <div className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500" style={{ width: '45%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex w-40 mt-5'>
                        <div className='text-xl text-white bg-blue-600 h-8 w-8 rounded mr-4'><FaRegUserCircle className='justify-center items-center m-auto mt-1' /></div>
                        <div className='flex flex-col'>
                            <span className='text-xl text-[#A0AEC0]'>Active</span>
                            <div>
                                <span className='text-xl font-bold'>100</span>
                                <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                                    <div className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500" style={{ width: '45%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Graph;
