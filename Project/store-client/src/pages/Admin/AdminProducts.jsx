import React from 'react'
import AdminPageHeader from '../../components/Admin/AdminPageHeader'
import { Pencil, Trash } from 'lucide-react'

const AdminProducts = () => {
  return (
    <>
      <div  className='w-full h-full flex flex-col justify-start items-start gap-4 py-3'>
        <AdminPageHeader title='Products'/>
        <table class="w-full h-full shadow-lg rounded-md border-collapse border border-slate-950 ">
          <thead>
            <tr>
              <th class=" p-6  ">Title</th>
              <th class="p-6  ">Price</th>
              <th class="p-6   ">Actions</th>
            </tr>
          </thead>
          <tbody>            
            <td class="p-4  ">Watch</td>
            <td class="p-4   ">1200</td>
            <td class="p-4  flex flex-row h-full w-full justify-center items-start gap-4 ">
              <button className='h-15 w-15 border-blue-500 border-2 p-1 hover:bg-blue-500 hover:text-white text-blue-500 rounded-md shadow-md hover:shadow-blue-500'>
                <Pencil/>
              </button>
              <button className='h-15 w-15 border-red-500 border-2 p-1 hover:bg-red-500 hover:text-white text-red-500 rounded-md shadow-md hover:shadow-red-500'>
                <Trash/>
              </button>
            </td>
          </tbody>
          <tbody>            
            <td class="p-4   ">Television</td>
            <td class="p-4   ">180000</td>
            <td class="p-4  flex flex-row h-full w-full justify-center items-start gap-4 ">
              <button className='h-15 w-15 border-blue-500 border-2 p-1 hover:bg-blue-500 hover:text-white text-blue-500 rounded-md shadow-md hover:shadow-blue-500'>
                <Pencil/>
              </button>
              <button className='h-15 w-15 border-red-500 border-2 p-1 hover:bg-red-500 hover:text-white text-red-500 rounded-md shadow-md hover:shadow-red-500'>
                <Trash/>
              </button>
            </td>
          </tbody>
          <tbody>
            <td class="p-4   ">Mobiles</td>
            <td class="p-4   ">12000</td>
            <td class="p-4  flex flex-row h-full w-full justify-center items-start gap-4 ">
              <button className='h-15 w-15 border-blue-500 border-2 p-1 hover:bg-blue-500 hover:text-white text-blue-500 rounded-md shadow-md hover:shadow-blue-500'>
                <Pencil/>
              </button>
              <button className='h-15 w-15 border-red-500 border-2 p-1 hover:bg-red-500 hover:text-white text-red-500 rounded-md shadow-md hover:shadow-red-500'>
                <Trash/>
              </button>
            </td>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default AdminProducts