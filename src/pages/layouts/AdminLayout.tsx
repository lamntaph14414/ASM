import React from 'react'
import {Outlet} from 'react-router-dom'
import NavAdmin from '../../components/admin/Nav'
import Sidebar from '../../components/admin/Sidebar'

const AdminLayout = () => {
  return (
    <>
      <div className="flex h-screen bg-gray-50 :bg-gray-900">
        <Sidebar/>
        <div className='flex flex-col flex-1 w-full'></div>
        <NavAdmin/>
        <main className="h-full overflow-y-auto">
            <Outlet/>
        </main>
      </div>
    </>
  )
}
export default AdminLayout