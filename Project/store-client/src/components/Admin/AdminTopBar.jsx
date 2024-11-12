
import { ShoppingCart, X } from 'lucide-react'
import React, { useRef, useState } from 'react'
import { AddProducts } from '../../api/api'

const AdminTopBar = () => {
  const [showAdd, setShowAdd] = useState(false)
  const titleRef = useRef('')
  const priceRef = useRef('')

  const handleAdd = async (e) => {
    e.preventDefault()
    const credentials = {
      title: titleRef.current.value,
      price: priceRef.current.value
    }
    try {
      const response = await AddProducts(credentials)
      const data = await JSON.stringify(response.data)
      if (response.status === 200) {
        console.log("Product added" + response.data.token)
      } else {
        console.log("Error in adding product" + data)
      }

    } catch (error) {
      console.error(error)
    }

    console.log(credentials)
  }
  return (
    <>
      <div className='w-full h-full shadow-purple-400 shadow-sm flex justify-end items-center px-3 '>
        <button classname='h-full w-full flex justify-center items-center shadow-md rounded-md '>
          <ShoppingCart className=' text-purple-500 p-2 hover:bg-purple-500 hover:text-white h-full w-full rounded-full'onClick={() => { setShowAdd(!showAdd) }} />
        </button>
      </div>

      {showAdd && (
        <div className="absolute top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-black/40 ">
          <div className='h-1/2 w-1/3 flex flex-col justify-center items-center bg-white shadow-2xl rounded-md'>
            <div className='h-full w-full flex flex-col justify-center items-center text-lg font-semibold'>
              <div className="w-[80%] flex flex-row justify-center items-center">
                <h1 className='w-1/2 text-left my-6 font-bold text-purple-500'>Add Products</h1>
                <div className="w-1/2 flex justify-end items-center text-red-500 cursor-pointer" onClick={() => { setShowAdd(!showAdd) }}>
                  <X className="h-8 w-8 border-2 p-1  border-red-500 rounded-full  hover:bg-red-500 hover:text-white" />
                </div>
              </div>
              <form className='h-[80%] w-[80%] flex flex-col justify-center items-center gap-8' onSubmit={handleAdd}>
                <input ref={titleRef} type="title" name="" id="title" placeholder='Product Name' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-purple-400 rounded-sm' required />
                <input ref={priceRef} type="price" name="" id="price" placeholder='Price' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-purple-400 rounded-sm' required />
                <button type="submit" className="w-full h-[3rem] shadow-sm bg-purple-500 text-white rounded-sm outline-none">ADD</button>
              </form>
            </div>
          </div>
        </div>
      )
      }



    </>
  )
  
}

export default AdminTopBar
