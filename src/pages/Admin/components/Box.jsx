import React from 'react';

const Box = ({icon,title,pera}) => {
    return (
        <>
            <div className='w-[34rem] h-[17rem] bg-white/7 rounded-2xl p-16 flex items-center gap-8'>
                <div>
                    <span className='text-7xl text-[#009CD1]'>{icon}</span>
                </div>
                <div>
                    <span className='text-5xl font-bold'>{title}</span>
                    <p className='text-2xl w-70 mt-1'>{pera}</p>
                </div>
            </div>
        </>
    );
}

export default Box;
