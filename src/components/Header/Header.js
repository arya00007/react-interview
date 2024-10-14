import React from 'react'

function Header() {
  return (
    
    <div className="flex justify-between items-center px-4 py-2 bg-blue-500 text-white font-medium">
        <div className='flex justify-between items-center px-4'>
            <div className="h-[40px] w-[40px] bg-white rounded-full"></div>
            <span className='ms-4'>Inventory Management System</span>
        </div>
        <div>
            <span>Home</span>
        </div>

    </div>
  )
}

export default Header