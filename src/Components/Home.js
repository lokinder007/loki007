import React from 'react'
// import { NavLink } from 'react-router-dom'
import Common from './Common'
import web from "./layout/webdev1.png"

const Home = () => {
    return (
        <>
            <Common  
            name="Grow your business with" 
            imgsrc={web}
            visit="/services"
            btname="Get Started"
            />
        </>
    )
}

export default Home
