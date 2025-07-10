import React from 'react'

//admin components 
function Profile() {
  return (
    <>

      <div className="min-h-screen bg-[#0a0f2c] text-white p-10 font-sans">
        {/* Back Arrow and Title */}
        <div className="flex items-center mb-6 ">
          <span className="text-4xl font-bold mr-2 cursor-pointer">←</span>
          <h2 className="text-4xl font-semibold">User Details</h2>
        </div>

        {/* Profile Header */}
        <div className="flex items-center gap-10 mb-10 mt-16 ">
          <div className='bg-white w-[9rem] h-[9rem] rounded-[50%]'>
            <img
              src=""
              alt=""
            />
            </div>
          <div>
            <h3 className="text-4xl font-bold">Jane Smith</h3>
            <p className="text-gray-300 text-2xl mt-3">jane.smith@gmail.com</p>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-[#12193f] p-8 rounded-lg">
            <p className="text-2xl text-gray-200">Plan</p>
            <p className="text-3xl font-semibold mt-2">Premium</p>
          </div>
          <div className="bg-[#12193f] p-8 rounded-lg">
            <p className="text-2xl text-gray-200">Status</p>
            <p className="text-3xl font-semibold mt-2">Active</p>
          </div>
          <div className="bg-[#12193f] p-8 rounded-lg">
            <p className="text-2xl text-gray-200">Joined</p>
            <p className="text-3xl font-semibold mt-2">May 23, 2025</p>
          </div>
          <div className="bg-[#12193f] p-8 rounded-lg">
            <p className="text-2xl text-gray-200">Plan Ends</p>
            <p className="text-3xl font-semibold mt-2">Jun 23, 2025</p>
          </div>
        </div>

        {/* Activity Section */}
        <div className="bg-[#12193f] p-8 rounded-lg">
          <p className="text-2xl text-gray-200">Activity</p>
          <p className="text-3xl  mt-1">
            User’s recent activities, logs and other relevant information
          </p>
        </div>
      </div>
    </>
  )
}

export default Profile