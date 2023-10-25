 /* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import Nav from './Nav';
import menu from '../list';



const NavBar = () => {

    const [nav, setNav] = useState(false);
    const [ham, setHam] = useState(false);

    function mouseOut() {
        setHam(false)
    }
    function mouseIn() {
        setHam(true)
    }


    return (
        <div>
            <nav className='flex justify-between items-center h-[80px] bg-orange-400 text-white px-20'>
                <div>
                    PASTRIES
                </div>

                <div className='hidden lg:flex gap-x-3'>
                    {
                        menu.map((item, id) =>{
                        return(
                    <div key={id}>{item.name}  {item.age}</div>
                    )
                    })
                }
                </div>



                <div onMouseEnter={mouseIn} onMouseLeave={mouseOut} className='lg:hidden flex gap-x-3'>
                    <div>
                        {
                            !ham ?
                                <AiOutlineMenu size={40} />
                                :
                                <AiOutlineClose size={40} />
                        }
                    </div>
                </div>



            </nav>


            {
                ham ?
                    <Nav />
                    :
                    ""
            }




        </div>
    )
}


export default NavBar

