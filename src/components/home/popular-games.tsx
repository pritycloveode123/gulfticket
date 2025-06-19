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
            <div className="py-2 sm:py-12 bg-white text-gray-800" id="how-it-works">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center mb-6 sm:mb-8">
                        <h2 className="text-xl sm:text-2xl font-bold text-[#DF911A] mb-3 sm:mb-4">How It Works</h2>
                    </div>

                    {steps.map((step, index) => (
                        <div key={index} className="relative flex flex-col items-center text-center mb-6 sm:mb-8">
                            {/* Step Number Circle */}
                            <div className="z-10 w-10 h-10 flex items-center justify-center rounded-full bg-[#DF911A] text-white font-bold shadow">
                                {index + 1}
                            </div>

                            {/* Step Content */}
                            <div className="mt-2 sm:mt-3 mb-2 sm:mb-4 px-2">
                                <h3 className="text-base sm:text-lg font-semibold text-black">{step.title}</h3>
                                <p className="text-sm sm:text-base text-gray-600 mt-1">{step.desc}</p>
                            </div>

                            {/* Vertical Line */}
                            {index !== steps.length - 1 && (
                                <>
                                    <div className="w-px h-4 sm:h-6 bg-gray-400" />
                                    <div className="w-px h-4 sm:h-6 bg-gray-400" />
                                </>
                            )}
                        </div>
                    ))}
                </div>
                <div className="flex flex-col items-center justify-center  bg-white">
                    <DynamicButton text="Start Playing Today" size="lg" />
                </div>
            </div>


        </>

    );
}
