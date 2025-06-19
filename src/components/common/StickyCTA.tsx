'use client';

import React from 'react';
import Link from 'next/link';

const StickyCTA = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.1)] border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-6">
                <Link href="https://gulfticket.com/Register">
                    <button
                        className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold text-sm sm:text-base px-5 py-3 sm:px-6 sm:py-4 rounded-md shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 uppercase"
                    >
                        JOIN NOW & START PLAYING
                    </button>
                </Link>

                <Link href="https://gulfticket.com/Register">
                    <button
                        className="w-full sm:w-auto bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white font-bold text-sm sm:text-base px-5 py-3 sm:px-6 sm:py-4 rounded-md shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 uppercase"
                    >
                        WATCH TODAY&apos;S LIVE DRAW
                    </button>
                </Link>
            </div>
        </div>

    );
};

export default StickyCTA;
