import React from 'react';

const GulfTicketThailand = () => {
    return (
        <div className=" bg-gray-100 ">
            <div className="container mx-auto">
                {/* Header Section */}
                <div className="text-center mb-8">
                    <h1 className="text-[#DF911A] text-sm sm:text-base font-semibold tracking-wider uppercase mb-2">
                        POPULAR GAMES ON
                    </h1>
                    <h2 className="text-[#DF911A] text-3xl  font-bold  ">
                        GULF TICKET THAILAND
                    </h2>
                </div>

                {/* Games Table */}
                <div className="bg-white  container mx-auto shadow-lg overflow-hidden text-center mb-12">
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-gradient-to-t from-[#e1a000] to-[#d5d100] text-white text-sm sm:text-base font-semibold">
                                    <th className="px-4 py-4 text-center border-r border-white">Popular games on Gulf Ticket Thailand</th>
                                    <th className="px-4 py-4 text-center border-r border-white">Description</th>
                                    <th className="px-4 py-4 text-center">Frequency of prize draws</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white text-sm sm:text-base text-gray-700">
                                <tr className="border-b border-gray-200">
                                    <td className="px-4 py-4 text-[#DF911A] font-semibold border-r border-gray-200">Dream5</td>
                                    <td className="px-4 py-4 text-center border-r border-gray-200">Classic 5-digit lottery</td>
                                    <td className="px-4 py-4 text-center">Weekly</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="px-4 py-4 text-[#DF911A] font-semibold border-r border-gray-200">Magic5</td>
                                    <td className="px-4 py-4 text-center border-r border-gray-200">Special lottery with additional bonus</td>
                                    <td className="px-4 py-4 text-center">Weekly</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="px-4 py-4 text-[#DF911A] font-semibold border-r border-gray-200">Rush3</td>
                                    <td className="px-4 py-4 text-center border-r border-gray-200">Play fast, know the results quickly</td>
                                    <td className="px-4 py-4 text-center">Every 3 hours</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="px-4 py-4 text-[#DF911A] font-semibold border-r border-gray-200">Fortune6</td>
                                    <td className="px-4 py-4 text-center border-r border-gray-200">Big Jackpot Game</td>
                                    <td className="px-4 py-4 text-center">Weekly</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-4 text-[#DF911A] font-semibold border-r border-gray-200">Lucky1</td>
                                    <td className="px-4 py-4 text-center border-r border-gray-200">Choose 1 to win a big prize</td>
                                    <td className="px-4 py-4 text-center">Daily</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>


                {/* How to Play Section */}
                <div className=" p-6 sm:p-8">
                    <div className="text-center mb-8">
                        <h3 className="text-[#DF911A] text-lg sm:text-xl font-bold tracking-wider uppercase mb-2">
                            HOW TO PLAY GULF TICKET
                        </h3>
                        <h4 className="text-[#DF911A] text-xl sm:text-2xl lg:text-3xl font-bold tracking-wider uppercase">
                            IN THAILAND
                        </h4>
                    </div>

                    <div className="space-y-2 text-black ">
                        {/* Step 1 */}
                        <div className="text-center">
                            <h5 className="font-semibold  mb-2 text-sm sm:text-base">
                                Step 1: Sign up for free
                            </h5>
                            <p className="text-sm sm:text-base leading-relaxed">
                                Register with your mobile number and email. Quickly verify your identity with OTP code for account security.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="text-center">
                            <h5 className="font-semibold mb-2 text-sm sm:text-base">
                                Step 2: Choose a game to play.
                            </h5>
                            <p className="text-sm sm:text-base leading-relaxed">
                                View the draw table and winning rates of each game. Choose a game that suits your playing style.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="text-center">
                            <h5 className="font-semibold mb-2 text-sm sm:text-base">
                                Step 3: Choose your numbers.
                            </h5>
                            <p className="text-sm sm:text-base leading-relaxed">
                                Choose your own numbers or use the Auto-Pick system.
                            </p>
                        </div>

                        {/* Step 4 */}
                        <div className="text-center">
                            <h5 className="font-semibold  mb-2 text-sm sm:text-base">
                                Step 4: Pay securely with Thai Baht (THB).
                            </h5>
                            <p className="text-sm sm:text-base leading-relaxed">
                                Choose popular Thai payment channels such as TrueMoney, PromptPay, SCB and more.
                            </p>
                        </div>

                        {/* Step 5 */}
                        <div className="text-center">
                            <h5 className="font-semibold  mb-2 text-sm sm:text-base">
                                Step 5: Watch the Live Draw & Notify Winners
                            </h5>
                            <p className="text-sm sm:text-base leading-relaxed">
                                The system will notify the winners via SMS, email and LINE. You can also watch the live draw on our website or YouTube.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='p-6 sm:p-8 text-center'>

                </div>
            </div>
        </div>
    );
};

export default GulfTicketThailand;