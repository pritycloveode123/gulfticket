'use client';

import React from 'react';
import DynamicButton from '../common/button';

const GulfTicketAppSection = () => {
    return (
        <div className="bg-gradient-to-r from-[#dce1ea] to-[#e4ecf3] py-12 px-6 text-[#000]" id="gulfticket-app">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch relative">
                {/* Vertical Dotted Line */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px border-l-2 border-dotted border-gray-400 transform -translate-x-1/2"></div>

                {/* Left Block */}
                <div className="flex flex-col h-full text-center px-4">
                    <h3 className="text-xl font-bold text-[#DF911A] uppercase mb-2">Download the App</h3>
                    <h2 className="text-3xl font-bold text-[#DF911A] uppercase leading-snug mb-4">
                        Gulf Ticket Thailand App <span className=" text-[#DF911A]">(Coming Soon)</span>
                    </h2>
                    <p className="text-gray-800 mb-4">
                        <span className="text-[#DF911A] font-medium">Gulf Ticket</span> mobile app designed
                        specifically for Thai players is coming soon! The app will feature many great features such as:
                    </p>
                    <ul className="text-gray-900 space-y-1 flex-grow">
                        <li>• Push Notification of Lottery Results</li>
                        <li>• Buy lottery easily with Thai Baht (THB)</li>
                        <li>• Fast withdrawal to domestic bank accounts</li>
                        <li>• Fully supports Thai language, easy to use at every step.</li>
                    </ul>
                    <div className='mt-6 flex justify-center'>
                        <DynamicButton text="Join us" size="lg" />
                    </div>
                </div>

                {/* Right Block */}
                <div className="flex flex-col h-full text-center px-4">
                    <h3 className="text-xl font-bold text-[#DF911A] uppercase mb-2">Download the App</h3>
                    <h2 className="text-3xl font-bold text-[#DF911A] uppercase leading-snug mb-4">
                        Contact Gulf Ticket Thailand
                    </h2>
                    <ul className="text-gray-900 space-y-2 flex-grow">
                        <li>• Email: support@gulfticket.com</li>
                        <li>• LINE Official: @gulfticketth</li>
                        <li>• Thai customer service hotline number: +66 2 123 4567</li>
                        <li>• Business hours: Every day from 9:00 AM – 9:00 PM.</li>
                    </ul>
                    <div className='mt-6 flex justify-center'>
                        <DynamicButton text="Join us" size="lg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GulfTicketAppSection;