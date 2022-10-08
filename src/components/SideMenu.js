import React from 'react'
import { AiOutlineBars } from "react-icons/ai";
import { useGlobalContext } from '../context'
import { BsXLg } from "react-icons/bs";
function SideMenu() {
    const {showSideMenu,setShowSideMenu}=useGlobalContext()
    return (
        <section>
            <AiOutlineBars className='bars' onClick={()=>setShowSideMenu(!showSideMenu)}/>
            {showSideMenu?
            <div className='side-con'>
                <aside>
                <BsXLg className='sidex' onClick={()=>setShowSideMenu(!showSideMenu)} />
                <ul>
                <li>Collection</li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            </aside>
            </div>:''}
        </section>
    )
}

export default SideMenu
