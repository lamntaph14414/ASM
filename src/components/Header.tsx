import React from 'react'
import Navbar from './Navbar'
import Search from 'antd/lib/transfer/search';
type Props = {}

const Header = (props: Props) => {
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className='navbar-brand' href="">Vegefoods</a>
      <Search/>
      <div className='collapse navbar-collapse' id="ftco-nav">
        <ul className='navbar-nav ml-auto'>
          <Navbar/>
        </ul>
      </div>
    </nav>
  )
}

export default Header