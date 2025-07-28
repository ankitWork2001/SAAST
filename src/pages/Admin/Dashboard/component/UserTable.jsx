import React from 'react';

const UserTable = () => {
  const users = [
    {
      name: 'Jane Smith',
      email: 'jane.smith@gmail.com',
      status: 'Active',
      subscription: 'Premium',
      plan: 'Monthly',
    },
    {
      name: 'Michael Johnson',
      email: 'michel.j@gmail.com',
      status: 'Active',
      subscription: 'Ultimate',
      plan: 'Monthly',
    },
    {
      name: 'Emily Brown',
      email: 'emilybrown@gmail.com',
      status: 'Active',
      subscription: 'Essential',
      plan: 'Yearly',
    },
    {
      name: 'Daniel Wilson',
      email: 'wilson.d@gmail.com',
      status: 'Active',
      subscription: 'Premium',
      plan: 'Monthly',
    },
    {
      name: 'Olivia Taylor',
      email: 'olivia.t7@gmail.com',
      status: 'Active',
      subscription: 'Essential',
      plan: 'Monthly',
    },
  ];

  return (
    <div className="overflow-x-auto rounded-md">
      <table className="min-w-full text-lg text-left text-white">
        <thead className="text-lg font-light uppercase border-b border-gray-700">
          <tr>
            <th scope="col" className="px-6 py-3">
              Recent Users
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Subscription
            </th>
            <th scope="col" className="px-6 py-3">
              Plan
            </th>
          </tr>
        </thead>
        <tbody className='font-light'>
          {users.map((user, index) => (
            <tr
              key={index}
              className={`border-b border-gray-700 ${
                index === 2 ? 'border-b-2 border-blue-500' : ''
              }`}
            >
              <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
              <td className="px-6 py-4">{user.email}</td>
              <td className="px-6 py-4">{user.status}</td>
              <td className="px-6 py-4">{user.subscription}</td>
              <td className="px-6 py-4">{user.plan}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
