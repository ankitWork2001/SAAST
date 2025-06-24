import React from 'react';

const Button = ({title,value,icon}) => {
    return (
        <div className='w-[19rem] h-[5.5rem] rounded-4xl flex justify-around py-3 px-2 bg-[linear-gradient(135deg,_rgba(78,97,133,1)_35%,_rgba(26,31,55,0.54)_100%)]'>
            <div className='flex flex-col gap-1'>
                <span className='text-xl text-[#A0AEC0] font-medium'>{title}</span>
                <span className='text-2xl font-semibold'>{value}</span>
            </div>
            <div className='bg-blue-600 p-3 rounded-2xl h-16 text-4xl'>{icon}</div>
        </div>
    );
}

export default Button;
