import React from 'react'
import {Outlet} from 'react-router-dom'
import Adminlayout from '../../components/Adminlayout'
type Props = {}

const AdminLayout = (props: Props) => {
  return (
    <div>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}
export default AdminLayout