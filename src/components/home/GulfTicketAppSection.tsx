'use client';

import React from 'react';
import DynamicButton from '../common/button';

const GulfTicketAppSection = () => {
    return (
        <div className="bg-gradient-to-r from-[#dce1ea] to-[#e4ecf3] py-12  text-[#000]">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                {/* Left Block */}
                <div>
                    <h3 className="text-xl font-bold text-[#DF911A] uppercase mb-2">Download the App</h3>
                    <h2 className="text-3xl font-bold text-[#DF911A] uppercase leading-snug mb-4">
                        Gulf Ticket Thailand App <span className=" text-[#DF911A]">(Coming Soon)</span>
                    </h2>
                    <p className="text-gray-800 mb-4">
                        <span className="text-[#DF911A] font-medium">Gulf Ticket</span> mobile app designed
                        specifically for Thai players is coming soon! The app will feature many great features such as:
                    </p>
                    <ul className="list-disc list-inside text-gray-900 space-y-1">
                        <li>Push Notification of Lottery Results</li>
                        <li>Buy lottery easily with Thai Baht (THB)</li>
                        <li>Fast withdrawal to domestic bank accounts</li>
                        <li>Fully supports Thai language, easy to use at every step.</li>
                    </ul>
                    <div className='mt-2'>
                        <DynamicButton text="Join us" size="lg" />
                    </div>
                </div>

                {/* Right Block */}
                <div>
                    <h3 className="text-xl font-bold text-[#DF911A] uppercase mb-2">Download the App</h3>
                    <h2 className="text-3xl font-bold text-[#DF911A] uppercase leading-snug mb-4">
                        Contact Gulf Ticket Thailand
                    </h2>
                    <ul className="list-disc list-inside text-gray-900 space-y-2">
                        <li>Email: support@gulfticket.com</li>
                        <li>LINE Official: @gulfticketth</li>
                        <li>Thai customer service hotline number: +66 2 123 4567</li>
                        <li>Business hours: Every day from 9:00 AM – 9:00 PM.</li>
                    </ul>
                    <div className='mt-2'>
                        <DynamicButton text="Join us" size="lg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GulfTicketAppSection;
