import React from 'react';
import { TiArrowRightThick } from "react-icons/ti";


const Notification = () => {

    const data = [
        {
            logo: "public/icon/icon.png",
            messange: "New Order #55sds",
            date: "12-DEC-2025"
        },
        {
            logo: "public/icon/icon2.png",
            messange: "$3400 order",
            date: "12-DEC-2025"
        }, {
            logo:"public/icon/icon3.png",
            messange: "New Order #55sds",
            date: "12-DEC-2025"
        }, {
            logo: "public/icon/icon.png",
            messange: "New Order #55sds",
            date: "12-DEC-2025"
        }
    ]
    return (
        <div className='flex flex-col gap-3'>
            <span className='text-3xl font-bold'>Notification</span>
            <div className='flex gap-3 text-2xl font-medium'>
                <TiArrowRightThick className='text-2xl mt-2 text-green-500' />
                <span>This Month</span>
            </div>
            <div className='flex flex-col gap-3'>
                {data.map((d) => {
                    return (
                        <div className='flex gap-5 text-xl font-medium'>
                            <img src={d.logo} className='h-8' alt="" />
                            <span className='w-45'>{d.messange}</span>
                            <span>{d.date}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Notification;
