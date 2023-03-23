import React from 'react';
import { Link } from 'react-router-dom';

const VarificationForm = () => {
    return (
        <div>
            {/* <!-- component --> */}
            <div class="relative flex min-h-screen flex-col justify-center overflow-hidde">
                <div class="relative bg-white px-0  mx-auto w-full max-w-lg rounded-2xl">
                    <div class="mx-auto flex w-full max-w-md flex-col space-y-16">
                        <div class="flex flex-col items-center justify-center text-center space-y-2">
                            <div class="font-semibold text-3xl">
                                <p>Enter the verification code to continue</p>
                            </div>
                            <div class="flex flex-row text-sm font-medium text-gray-400">
                                <p>We sent to <span className='text-primary'>hellouser@heads.design.</span> If you <br /> don’t see it, check your spam.</p>
                            </div>
                        </div>

                        <div>
                            <form action="" method="post">
                                <div class="flex flex-col space-y-16">
                                    <div class="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                                        <div class="w-12 h-12 ">
                                            <input class="w-full h-full flex flex-col items-center justify-center text-center px-[18px] outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id="" />
                                        </div>
                                        <div class="w-12 h-12 ">
                                            <input class="w-full h-full flex flex-col items-center justify-center text-center px-[18px] outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id="" />
                                        </div>
                                        <div class="w-12 h-12 ">
                                            <input class="w-full h-full flex flex-col items-center justify-center text-center px-[18px] outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id="" />
                                        </div>
                                        <div class="w-12 h-12 ">
                                            <input class="w-full h-full flex flex-col items-center justify-center text-center px-[18px] outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id="" />
                                        </div>
                                        <div class="w-12 h-12 ">
                                            <input class="w-full h-full flex flex-col items-center justify-center text-center px-[18px] outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id="" />
                                        </div>
                                        <div class="w-12 h-12 ">
                                            <input class="w-full h-full flex flex-col items-center justify-center text-center px-[18px] outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id="" />
                                        </div>
                                    </div>

                                    <div class="flex flex-col mx-16">

                                        <div class="flex flex-row items-center justify-between text-center text-sm font-medium  text-gray-500">
                                            <Link class="flex flex-row items-center text-blue-600 font-b" to="/" rel="noopener noreferrer">Back</Link>
                                            <Link to='/success'><button className='text-primary'>Sumbit</button></Link>
                                            <h4 class="flex flex-row items-center" href="http://" target="_blank" rel="noopener noreferrer">Resend 00:10</h4>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VarificationForm;