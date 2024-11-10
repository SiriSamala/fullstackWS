import React from 'react'
import {ShoppingBasket, ShoppingCart, Users} from "lucide-react"

const AdminDashboardHomeCards = () => {
    return (
        <>
            <div className='w-full flex flex-row justify-center items-center gap-6 py-3 px-3'>
                <div className='w-[25vw] h-[10vh] flex flex-row justify-center items-start px-2 shadow-md rounded-sm hover:text-purple-500 '>
                    <div className='w-[70%] h-full flex flex-col justify-center items-start px-4'>
                        <p className='text-3xl font-bold'>
                            100
                        </p>
                        <p className='text-sm font-semibold px-1'>
                            Users
                        </p>
                    </div>
                    <div className='w-[30%] h-full flex justify-center items-center'>
                        <Users classname='w-9 h-9'/>
                    </div>
                </div>
                <div className='w-[25vw] h-[10vh] flex flex-row justify-center items-start px-2 shadow-md rounded-sm hover:text-purple-500 '>
                    <div className='w-[70%] h-full flex flex-col justify-center items-start px-4'>
                        <p className='text-3xl font-bold'>
                            100
                        </p>
                        <p className='text-sm font-semibold px-1'>
                            Products
                        </p>
                    </div>
                    <div className='w-[30%] h-full flex justify-center items-center'>
                        <ShoppingCart classname='w-9 h-9'/>
                    </div>
                </div>
                <div className='w-[25vw] h-[10vh] flex flex-row justify-center items-start px-2 shadow-md rounded-sm hover:text-purple-500 '>
                    <div className='w-[70%] h-full flex flex-col justify-center items-start px-4'>
                        <p className='text-3xl font-bold'>
                            100
                        </p>
                        <p className='text-sm font-semibold px-1'>
                            Orders
                        </p>
                    </div>
                    <div className='w-[30%] h-full flex justify-center items-center'>
                        <ShoppingBasket classname='w-9 h-9'/>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AdminDashboardHomeCards