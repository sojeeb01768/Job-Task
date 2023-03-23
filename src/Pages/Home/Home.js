import React from 'react';
import LoginForm from '../../component/LoginForm';
import Slider from '../../component/Slider';

const Home = () => {
    return (
        <div className='flex justify-evenly items-center overflow-hidden'>
            <LoginForm></LoginForm>
            <Slider></Slider>
        </div>
    );
};

export default Home;