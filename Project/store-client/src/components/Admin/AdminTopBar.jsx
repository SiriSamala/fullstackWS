import { User } from 'lucide-react'
import React from 'react'

const AdminTopBar = () => {
  return (
    <div className='w-full h-full shadow-purple-400 shadow-sm flex justify-end items-center px-3 '>
    <button classname='h-full w-full flex justify-center items-center shadow-md rounded-md '>
      <User className=' text-purple-500 p-2 hover:bg-purple-500 hover:text-white h-full w-full rounded-full' />
    </button>
  </div>

  )
}

export default AdminTopBar