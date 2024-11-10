import React from 'react'

const AdminPageHeader = ({title}) => {
  return (
    <>
        <div className='  h-full w-full flex flex-col justify-start items-start text-3xl font-bold text-purple-500'>
            {title}
        </div>
    </>
  )
}

export default AdminPageHeader