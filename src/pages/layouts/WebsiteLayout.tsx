import React from 'react'
import {Outlet} from 'react-router-dom';
import Header from '../../components/client/Header'
import Footer from '../../components/client/Footer'


type Props = {}

const WebsiteLayout = (props: Props) => {
  return (
    <>
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </>
  )
}

export default WebsiteLayout