'use client';

import React from 'react';
import DynamicButton from '../common/button';
const steps = [
    {
        title: 'Step 1: Register Free Account',
        desc: 'Sign up instantly with mobile number & OTP verification.',
    },
    {
        title: 'Step 2: Deposit Funds',
        desc: 'Start with RM50 via trusted Malaysian payment gateways.',
    },
    {
        title: 'Step 3:Select Game & Lucky Numbers',
        desc: 'Choose your favorite game and lucky numbers or auto-pick.',
    },
    {
        title: 'Step 4:Watch Live Draws Daily',
        desc: 'Transparent live draws streamed professionally every single day.',
    },
    {
        title: 'Step 5:Withdraw Winnings Instantly ',
        desc: 'Withdraw your winnings to your Malaysian bank within 24 hours.',
    },
];

export default function GulfTicketThailand() {
    return (
        <>
            <div className=" py-12 bg-white  text-gray-800" id='how-it-works'>
                <div className='container mx-auto px-6'>
                    <div className="text-center mb-8">
                        <h2 className="text-2xl  font-bold text-[#DF911A] mb-4">How It Works
                        </h2>
                        {/* <h3 className="text-3xl sm:text-4xl font-bold text-[#DF911A] mb-4 uppercase">in Thailand</h3> */}
                    </div>

                    {steps.map((step, index) => (
                        <div key={index} className="relative flex flex-col items-center text-center">
                            {/* Circle with Step Number */}
                            <div className="z-10 w-10 h-10 flex items-center justify-center rounded-full bg-[#DF911A] text-white font-bold shadow">
                                {index + 1}
                            </div>

                            {/* Step Content */}
                            <div className="mt-3 mb-4">
                                <h3 className="text-lg sm:text-xl font-semibold text-black">{step.title}</h3>
                                <p className="text-sm sm:text-base text-gray-600 mt-1">{step.desc}</p>
                            </div>

                            {/* Vertical Line */}
                            {index !== steps.length - 1 && (
                                <>
                                    <div className="w-px h-6 bg-gray-400" />
                                    {/* <div className="w-full border-t border-dashed border-gray-300 my-4" /> */}
                                    <div className="w-px h-6 bg-gray-400" />
                                </>
                            )}
                        </div>
                    ))}

                </div>
            </div>
            <div className='flex flex-col items-center justify-center py-8 bg-white'>
                <DynamicButton text="Start Playing Today" size="lg" />
            </div>

        </>
    );
}
