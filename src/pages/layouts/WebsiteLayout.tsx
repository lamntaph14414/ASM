import React from 'react'
import {Outlet} from 'react-router-dom';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import Haeder from '../../components/Header';


type Props = {}

const WebsiteLayout = (props: Props) => {
  return (
    <div>
        <header>
          <Haeder/>
          <Banner/>
        </header>
        <main>
          <Outlet/>
        </main>
        <footer>
          <Footer/>
        </footer>
    </div>
  )
}

export default WebsiteLayout