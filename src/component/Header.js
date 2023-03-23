import React from 'react';
import icon from "../assets/Subtract.png";

const Header = () => {
    return (
        <div>
            <div className='flex mx-5 mt-5 justify-between items-center' >
                <div>
                    <img src={icon} alt="" />
                </div>
                <div className='lg:hidden md:hidden '>
                    <button>not member? <span className='text-[#0858F7]'>create Account</span></button>
                </div>
            </div>
        </div>
    );
};

export default Header;