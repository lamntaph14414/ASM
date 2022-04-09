import React from 'react'
import SearchForm from './SearchForm'
import ActionAccount from './ActionAccount'

const NavAdmin = () => {
  return (
    <nav className="z-10 py-4 bg-white shadow-md :bg-gray-800">
        <div
            className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 :text-purple-300">
            <SearchForm />
            <ActionAccount/>
        </div >
    </nav >
  )
}

export default NavAdmin