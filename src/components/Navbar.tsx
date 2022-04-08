import React from 'react'
import {NavLink} from 'react-router-dom'
import { Avatar,Space } from 'antd';
import { UserOutlined, createFromIconfontCN } from '@ant-design/icons';

type Props = {}
const IconFont = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
    '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
  ],
});
const Navbar = (props: Props) => {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/product">Product</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
        <div>
          <Avatar size="large" icon={<UserOutlined />} />
        </div>
        
    </ul>
  )
}

export default Navbar