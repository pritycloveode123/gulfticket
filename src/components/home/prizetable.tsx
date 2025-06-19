'use client';

import React from 'react';
import DynamicButton from '@/components/common/button';

const games = [
    { name: 'Lucky 1', maxPrize: 'RM50,000', draw: 'Daily' },
    { name: 'Rush 3', maxPrize: 'RM80,000', draw: 'Daily' },
    { name: 'Dream 5', maxPrize: 'RM1,150,000', draw: 'Wed 25 Jun 2025 08:00 PM' },
    { name: 'Magic 5', maxPrize: 'RM575,000', draw: 'Thu 19 Jun 2025 08:00 PM' },
    { name: 'Fortune 6', maxPrize: 'RM5,750,000', draw: 'Fri 20 Jun 2025 08:00 PM' },
    { name: 'Super 5', maxPrize: 'RM115,000,000', draw: 'Sat 21 Jun 2025 08:00 PM' },
];

const GamePrizeTable = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12" id="live-draws">
            {/* Heading */}
            <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-[#DF911A] font-bold text-xl sm:text-2xl mb-1">Game Selection &</h2>
                <h3 className="text-[#DF911A] font-bold text-2xl sm:text-3xl">Prize Table</h3>
            </div>

            {/* Table */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
                <table className="w-full text-center text-sm sm:text-base">
                    <thead className="bg-[#DF911A] text-white">
                        <tr>
                            <th className="px-3 py-2 sm:px-6 sm:py-3 font-semibold">Game</th>
                            <th className="px-3 py-2 sm:px-6 sm:py-3 font-semibold">Max Prize</th>
                            <th className="px-3 py-2 sm:px-6 sm:py-3 font-semibold">Draw Frequency</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {games.map((game, index) => (
                            <tr key={index}>
                                <td className="px-3 py-2 sm:px-6 sm:py-3 text-[#DF911A] font-bold">{game.name}</td>
                                <td className="px-3 py-2 sm:px-6 sm:py-3 text-gray-600 font-semibold">{game.maxPrize}</td>
                                <td className="px-3 py-2 sm:px-6 sm:py-3 text-gray-600 font-semibold">{game.draw}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Button */}
            <div className="mt-8 sm:mt-12 flex justify-center">
                <DynamicButton text="Play Now & Join Today’s Draw" size="lg" />
            </div>
        </div>
    );
};

export default GamePrizeTable;
