'use client';

import DynamicButton from '../common/button';

export default function GulfTicketBanner() {
    return (
        <div
            className="w-full bg-cover bg-center bg-no-repeat flex items-center justify-center relative py-8 sm:py-16"
            style={{ backgroundImage: "url('/bg2.jpg')" }}
        >
            <div className="relative z-10 max-w-4xl w-full px-4 sm:px-6 py-6 sm:py-12 bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-xl text-center">
                {/* Heading */}
                <h1 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 drop-shadow-lg">
                    Malaysia’s #1 Daily Draw Platform - 80%-90% Winning Chance
                </h1>

                {/* First paragraph */}
                <p className="text-base sm:text-lg text-black mb-3 sm:mb-4 leading-relaxed">
                    <span className="text-yellow-400 font-bold"></span> Win Cars, Cash, Phones.
                    <span className="font-semibold text-black"></span> Start from RM50
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                    <DynamicButton text="REGISTER NOW" size="lg" />
                    <DynamicButton text="WATCH LIVE DRAW" size="lg" />
                </div>
            </div>
        </div>
    );
}
