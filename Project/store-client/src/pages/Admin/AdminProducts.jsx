import React from 'react'

const AdminProducts = () => {
  return (
    <>
      <div  className='w-full h-screen '>
        <table>
          <thead>
            <tr>
              <th>Product Id</th>
              <th>Product Name</th>
              <th>Product price</th>
              <th>Product Sales</th>
            </tr>
          </thead>
          <tbody>
            <td>001</td>
            <td>Watch</td>
            <td>1200</td>
            <td>10%</td>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default AdminProducts