import React from 'react';
import { GiCrossMark } from 'react-icons/gi';
import { BiMessageRounded } from 'react-icons/bi';
import { CgToolbox } from 'react-icons/cg';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { BsPeople } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';





function Sidebar() {
    return (
        
        <div className="sidebar">
            <div className="log">
            <ul type="none">  

                <li><GiCrossMark /></li>
                <li><BiMessageRounded /></li>
                <li><AiOutlineFieldTime/></li>
                <li><CgToolbox /></li>
                <li><BsPeople/></li>
                <li><FiSettings/></li>

                
            </ul>
            </div>

        </div>
    )
}

export default Sidebar
