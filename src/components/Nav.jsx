/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {



    return (

        <div>
            <div className='bg-orange-400 text-white flex flex-col h-screen gap-y-10 text-center'>
                <Link to="/" >HOME</Link>
                <div>ABOUT</div>
                <div>CONTACTS</div>
                <div>NUMBER</div>
            </div>


            
        </div>

    )
}

export default Nav