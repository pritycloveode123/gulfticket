'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import DynamicButton from '../common/button';

const cardsData = [
    {
        id: 1,
        image: '/sexy_girl1.png',
        text: 'DESIGNED SPECIFICALLY FOR THAI PLAYERS SUPPORTS BOTH THAI AND ENGLISH LANGUAGES, PAYS IN THAI BAHT, AND HAS A CUSTOMER SERVICE TEAM THAT TRULY UNDERSTANDS THE NEEDS AND CULTURE OF THAI USERS.',
    },
    {
        id: 2,
        image: '/sexy_girl2.png',
        text: 'DESIGNED SPECIFICALLY FOR THAILAND SUPPORTS BOTH THAI AND ENGLISH LANGUAGES. PAYMENTS ARE MADE IN THAI BAHT WITH A CUSTOMER SERVICE TEAM THAT TRULY UNDERSTANDS THE CULTURE AND NEEDS OF THAI USERS.',
    },
    {
        id: 3,
        image: '/sexy_girl3.png',
        text: 'SAFE AND SECURE GULF TICKET USES ADVANCED ENCRYPTION AND STATE-OF-THE-ART SECURITY PROTOCOLS TO PROTECT YOUR INFORMATION AND FUNDS AT EVERY STEP.',
    },
    {
        id: 4,
        image: '/sexy_girl4.png',
        text: 'MULTIPLE GAME OPTIONS DESIGNED FOR MAXIMUM ENTERTAINMENT WITH RESPONSIBLE GAMING FEATURES BUILT-IN.',
    },
    {
        id: 5,
        image: '/sexy_girl5.png',
        text: 'EASY TO USE PLATFORM DESIGNED FOR BOTH MOBILE AND DESKTOP EXPERIENCES.',
    },
];

export default function GulfTicketShowcase() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    // Duplicate start & end for infinite loop illusion
    const extendedCards = [
        ...cardsData.slice(-2),
        ...cardsData,
        ...cardsData.slice(0, 2),
    ];

    const slideWidth = 100 / 3;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => prev + 1);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    // Reset to start after full loop
    useEffect(() => {
        if (currentIndex === cardsData.length + 1) {
            setTimeout(() => {
                // Reset without animation
                if (containerRef.current) {
                    containerRef.current.style.transition = 'none';
                    setCurrentIndex(1);
                }
            }, 600); // Wait for transition to end
        } else {
            if (containerRef.current) {
                containerRef.current.style.transition = 'transform 0.6s ease-in-out';
            }
        }
    }, [currentIndex]);

    return (
        <div className="bg-gradient-to-b from-gray-100 to-white  text-center  py-12">
            <h4 className="text-lg font-semibold text-[#DF911A] mb-2">
                REASONS WHY THAI PLAYERS TRUST GULF TICKET
            </h4>
            <h2 className="text-3xl font-bold text-[#DF911A] mb-10">
                GET INSTANT HOURLY REWARDS WITH GULFTICKET
            </h2>

            <div className="container mx-auto px-4 overflow-hidden">
                <div className="relative w-full">
                    <div
                        ref={containerRef}
                        className="flex w-[calc(35%*8.5/3)]"
                        style={{
                            transform: `translateX(-${currentIndex * slideWidth}%)`,
                        }}
                    >
                        {extendedCards.map((card, i) => (
                            <div
                                key={i}
                                className="w-1/3 flex-shrink-0 px-4"
                            >
                                <div className="border-2 border-orange-300 rounded-lg p-6 bg-white shadow-md flex flex-col items-center h-full relative">
                                    <Image
                                        src={card.image}
                                        alt="Player"
                                        width={160}
                                        height={160}
                                        className="h-64 w-62 object-cover  mb-4"
                                    />
                                    <p className="mt-6 text-sm font-semibold text-gray-800">
                                        {card.text}
                                    </p>
                                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                                        <DynamicButton text="BUY NOW !" size="sm" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
