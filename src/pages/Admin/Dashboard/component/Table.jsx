import React from 'react';

const Table = () => {
    const details = [
        {
            logo: '/public/icon/icon.png',
            tittle: 'Chakra Soft UI Version',
            photo: '/public/icon/person.png',
            price: '$2999',
        },
        {
            logo: '/public/icon/icon.png',
            tittle: 'Chakra Soft UI Version',
            photo: '/public/icon/person.png',
            price: '$2999',
        }, {
            logo: '/public/icon/icon.png',
            tittle: 'Chakra Soft UI Version',
            photo: '/public/icon/person.png',
            price: '$2999',
        }, {
            logo: '/public/icon/icon.png',
            tittle: 'Chakra Soft UI Version',
            photo: '/public/icon/person.png',
            price: '$2999',
        }, {
            logo: '/public/icon/icon.png',
            tittle: 'Chakra Soft UI Version',
            photo: '/public/icon/person.png',
            price: '$2999',
        }]

    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-[#A0AEC0] text-lg uppercase  dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">Product name</th>
                        <th scope="col" className="px-6 py-3">Color</th>
                        <th scope="col" className="px-6 py-3">Category</th>
                        <th scope="col" className="px-6 py-3">Price</th>
                    </tr>
                </thead>
                <tbody className='text-xl text-white'>
                    {
                        details.map((d) => {
                            return (
                                <tr>
                                    <th>
                                        <div className='flex gap-3 text-lg'>
                                            <img src={d.logo} alt="" />
                                            <span>{d.tittle}</span>
                                        </div>
                                    </th>
                                    <th>
                                        <div className='flex'>
                                            <img src={d.photo} className='rounded-xl h-6' alt="" />
                                            <img src={d.photo} className='rounded-xl h-6' alt="" />
                                            <img src={d.photo} className='rounded-xl h-6' alt="" />
                                            <img src={d.photo} className='rounded-xl h-6' alt="" />
                                        </div>
                                    </th>
                                    <th>
                                        <span className='text-lg'>{d.price}</span>
                                    </th>
                                    <th>
                                        <span className='text-xl font-bold'>120</span>
                                        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                                            <div className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500" style={{ width: '45%' }}></div>
                                        </div>
                                    </th>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    );
};

export default Table;
