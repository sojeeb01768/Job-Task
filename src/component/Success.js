import React from 'react';
import icon from '../assets/Subtract.png'

const Success = () => {
    return (
        <div className='text-primary flex-col flex justify-center items-center h-screen'>
           <img src={icon} alt="" />
           <p className=''>Success!</p>

        </div>
    );
};

export default Success;