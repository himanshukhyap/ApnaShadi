import React from 'react'

import { Outlet } from 'react-router-dom'

import Slider from '../Component/Slider'
import Footer from '../Components/Footer/Footer'

import Header from '../Header/Header'



export default function PublicLayout() {
    return (
        <>
            <Header />
            {/* <hr className='m-0 border border-1' /> */}
            <div className="container w-75">
            </div>
            <hr className='m-0 border border-1' />
         
                <Outlet />

          
            <Footer />
        </>
    )
}
