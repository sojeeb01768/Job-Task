import React from 'react';
import Slider from './Slider';
import VarificationForm from './VarificationForm';

const Varification = () => {
    return (
        <div className='flex justify-evenly items-center overflow-hidden'>
            <VarificationForm></VarificationForm>
            <Slider></Slider>
        </div>
    );
};

export default Varification;