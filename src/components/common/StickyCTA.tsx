'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const StickyCTA = () => {
    return (
        <div className="fixed bottom-4 right-4 z-50">
            <Link href="https://gulfticket.com/Register">
                <button className="bg-black border-2 border-yellow-500 p-3 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.2)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.25)] transition-all duration-200 transform hover:scale-105">
                    <Image
                        src="/gulfticket_logo.png"
                        alt="Logo"
                        width={32}
                        height={32}
                        className="object-contain h-10 w-10"
                    />
                </button>
            </Link>
        </div>
    );
};

export default StickyCTA;
