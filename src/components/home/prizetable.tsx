'use client';

import React from 'react';
import DynamicButton from '@/components/common/button';
const games = [
    { name: 'Lucky 1', maxPrize: 'RM50,000', draw: 'Daily' },
    { name: 'Rush 3', maxPrize: 'RM80,000', draw: 'Daily' },
    { name: 'Dream 5', maxPrize: 'RM1,150,000', draw: 'Daily' },
    { name: 'Magic 5', maxPrize: 'RM575,000', draw: 'Daily' },
    { name: 'Fortune 6', maxPrize: 'RM5,750,000', draw: 'Daily' },
    { name: 'Super 5', maxPrize: 'RM115,000,000', draw: 'Daily' },
];

const GamePrizeTable = () => {
    return (
        <>
            <div className="container mx-auto px-6 py-8">
                <div className="text-center mb-12">
                    <h2 className="text-[#DF911A] font-bold text-2xl mb-2">Game Selection &</h2>
                    <h3 className="text-[#DF911A] font-bold text-3xl mb-6"> Prize Table
                    </h3>
                </div>
                <div className="overflow-x-auto border border-gray-200 rounded-lg">
                    <table className="min-w-full  shadow-md  overflow-hidden">
                        <thead className="bg-[#DF911A] text-center ">
                            <tr>
                                <th className=" text-white text-xl px-6 py-3 text-sm font-semibold text-gray-700">Game</th>
                                <th className=" text-white text-xl px-6 py-3 text-sm font-semibold text-gray-700">Max Prize</th>
                                <th className=" text-white text-xl px-6 py-3 text-sm font-semibold text-gray-700">Draw Frequency</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 text-center">
                            {games.map((game, index) => (
                                <tr key={index} >
                                    <td className="px-6 py-3 text-gray-800 font-semibold">{game.name}</td>
                                    <td className="px-6 py-3 text-green-600 font-semibold">{game.maxPrize}</td>
                                    <td className="px-6 py-3 text-gray-600 font-semibold">{game.draw}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className='mt-6 flex justify-center'>
                    <DynamicButton text=" Play Now & Join Today’s Draw" size="lg" />
                </div>
            </div>

        </>
    );
};

export default GamePrizeTable;
