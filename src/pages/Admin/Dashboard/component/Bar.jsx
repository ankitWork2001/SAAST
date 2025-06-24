import React from 'react';

const Bar = ({ progress = 45, color = 'bg-blue-600', height = 'h-48', width = 'w-2' }) => {
    return (
        <div className={`relative ${width} ${height} bg-gray-200 rounded-full dark:bg-gray-700 overflow-hidden`}>
            <div
                className={`${color} absolute bottom-0 ${width} rounded-full`}
                style={{ height: `${progress}%` }}
            ></div>
        </div>
    );
};

export default Bar;
