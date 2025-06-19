'use client';

import React from 'react';
import DynamicButton from '../common/button';

const GulfTicketAppSection = () => {
    return (
        <div className="bg-gradient-to-r from-[#dce1ea] to-[#e4ecf3] py-6 sm:py-12 px-4 sm:px-6 text-[#000]" id="gulfticket-app">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 items-stretch relative">
                {/* Vertical Dotted Line */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px border-l-2 border-dotted border-gray-400 transform -translate-x-1/2"></div>

                {/* Left Block */}
                <div className="flex flex-col h-full text-center px-2 sm:px-4">
                    <h3 className="text-base sm:text-xl font-bold text-[#DF911A] uppercase mb-2">Download the App</h3>
                    <h2 className="text-xl sm:text-3xl font-bold text-[#DF911A] uppercase leading-snug mb-3 sm:mb-4">
                        Gulf Ticket Malaysia App <span className=" text-[#DF911A] text-sm">(Coming Soon)</span>
                    </h2>
                    <p className="text-gray-800 text-sm sm:text-base mb-3">
                        <span className="text-[#DF911A] font-medium">Gulf Ticket</span> mobile app designed specifically for Malaysia players is coming soon! The app will feature many great features such as:
                    </p>
                    <ul className="text-gray-900 text-sm sm:text-base space-y-1 flex-grow">
                        <li>• Push Notification of Lottery Results</li>
                        <li>• Buy lottery easily</li>
                        <li>• Fast withdrawal to domestic bank accounts</li>
                        <li>• Fully supports Malay language, easy to use at every step.</li>
                    </ul>
                    {/* <div className='mt-4 sm:mt-6 flex justify-center'>
                        <DynamicButton text="Join us" size="lg" />
                    </div> */}
                </div>

                {/* Right Block */}
                <div className="flex flex-col h-full text-center px-2 sm:px-4">
                    <h3 className="text-base sm:text-xl font-bold text-[#DF911A] uppercase mb-2">Download the App</h3>
                    <h2 className="text-xl sm:text-3xl font-bold text-[#DF911A] uppercase leading-snug mb-3 sm:mb-4">
                        Contact & Malaysian Support
                    </h2>
                    <ul className="text-gray-900 text-sm sm:text-base space-y-2 flex-grow">
                        <li>• Email: support@gulfticket.com.my</li>
                        <li>• Malaysian Hotline: +60 X XXX XXXX</li>
                        <li>• Live Chat / WhatsApp: 9AM–9PM Daily</li>
                    </ul>
                    <div className='mt-4 sm:mt-6 flex justify-center'>
                        <DynamicButton text="Join us" size="lg" />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default GulfTicketAppSection;