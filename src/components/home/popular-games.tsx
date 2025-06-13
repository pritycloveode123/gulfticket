'use client';

import React from 'react';

const steps = [
    {
        title: 'Step 1: Sign up for free',
        desc: 'Register with your mobile number and email. Quickly verify your identity with OTP code for account security.',
    },
    {
        title: 'Step 2: Choose a game to play.',
        desc: 'View the draw table and winning rates of each game. Choose a game that suits your playing style.',
    },
    {
        title: 'Step 3: Choose your numbers',
        desc: 'Choose your own numbers or use the Auto-Pick system.',
    },
    {
        title: 'Step 4: Pay securely with Thai Baht (THB).',
        desc: 'Choose popular Thai payment channels such as TrueMoney, PromptPay, SCB and more',
    },
    {
        title: 'Step 5:Watch the Live Draw & Notify Winners',
        desc: 'The system will notify the winners via SMS, email and LINE. You can also watch the live draw on our website or YouTube.',
    },
];

export default function GulfTicketThailand() {
    return (
        <>
            <div className=" py-12 bg-white  text-gray-800" id='how-to-play'>
                <div className='container mx-auto px-6'>
                    <div className="text-center mb-8">
                        <h2 className="text-2xl  font-bold text-[#DF911A] mb-4">How to play Gulf Ticket</h2>
                        <h3 className="text-3xl sm:text-4xl font-bold text-[#DF911A] mb-4 uppercase">in Thailand</h3>
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

        </>
    );
}
