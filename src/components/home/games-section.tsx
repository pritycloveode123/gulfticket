"use client";

import Link from "next/link";

export default function GulfTicketGamesSection() {
    return (
        <div className="w-full bg-gray-100 py-16 px-6 " id="about-us">
            <div className="container mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-[#DF911A] font-bold text-2xl mb-2">GULF TICKET</h2>
                    <h3 className="text-[#DF911A] font-bold text-3xl mb-6">WHAT IS IT?</h3>
                    <p className="text-black text-base leading-relaxed text-justify">
                        Gulf Ticket is an online lottery platform originating from the United Arab Emirates (UAE) that was established to create a new and unique lottery experience. We are not just a lottery trading channel, but also a developer of unique and tailor-made lottery games that are not available anywhere else in the world.
                    </p>
                </div>

                {/* Auto-scrolling Marquee Section */}
                <div className="overflow-hidden relative">
                    <div className="flex w-max animate-marquee gap-6 hover:pause-marquee">
                        {[
                            {
                                src: "https://gulfticket-th.com/wp-content/uploads/2025/04/2-Lucky1.jpg",
                                alt: "Lucky1 Live Draw",
                            },
                            {
                                src: "https://gulfticket-th.com/wp-content/uploads/2025/04/4-Rush3.png",
                                alt: "Rush3 Live Draw",
                            },
                            {
                                src: "https://gulfticket-th.com/wp-content/uploads/2025/04/1-Dream5.jpg",
                                alt: "Dream5 Live Draw",
                            },
                            {
                                src: "https://gulfticket-th.com/wp-content/uploads/2025/04/3-Magic5.png",
                                alt: "Magic5 Live Draw",
                            },
                            {
                                src: "https://gulfticket-th.com/wp-content/uploads/2025/04/5-Fortune6.png",
                                alt: "Fortune5 Live Draw",
                            },
                            {
                                src: "https://gulfticket-th.com/wp-content/uploads/2025/04/6-Super6.png",
                                alt: "Super6 Live Draw",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="w-60 h-40 min-w-[240px] rounded-lg overflow-hidden border-2 border-[#DF911A] shadow-md"
                            >
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Description */}
                <div className="text-gray-800 mt-12 space-y-5 text-justify">
                    <p>
                        All our games are designed to provide players with real excitement and a fair and transparent chance to win. Popular games like Rush3, which draws 3 times a day, Lucky1, which is easy to play by selecting a single number, as well as Dream5, Magic5, Super6 and Fortune6, are all developed to suit different styles of players.
                    </p>
                    <p>
                        We have carefully designed the system with trust, safety and the best experience for all players in mind.
                    </p>
                    <p>
                        To support players in Thailand, Gulf Ticket has designed a system specifically for Thais, supporting full mobile access, with a Thai language menu, and easy-to-use domestic payment channels such as TrueMoney Wallet, PromptPay, SCB, Krung Thai, and Bangkok Bank.
                    </p>
                    <p>
                        Whether you prefer a fast-paced thrill or wait for the weekly jackpot, Gulf Ticket has a full range of lottery games to choose from, with real money prizes and a transparent display system that allows you to check every draw.
                    </p>
                    <p>
                        In addition, Gulf Ticket is committed to developing a sustainable society, inspired by the ideas of His Highness Sheikh Mohammed bin Rashid Al Maktoum, the UAE&apos;s leader, who prioritizes the happiness of his people, the environment and the future of society.
                    </p>
                    <p>
                        One of the projects that reflects our commitment is the Palm Tree Plantation Project, which uses a portion of the proceeds from lottery sales to plant trees, increase green spaces and promote sustainability in the region.
                    </p>
                    <p>
                        We believe that “Every Lottery Ticket is Hope”, not just a chance to win, but an opportunity to change lives, inspire and spread positive energy to both players and the community. Gulf Ticket is not just an entertainment platform, but a bridge to a better future for everyone.
                    </p>
                    <div className="mt-8 flex items-center justify-center">
                        <button className="font-semibold text-[#DF911A] text-2xl hover:underline">
                            <Link href="https://gulfticket.com/Register"> Browse all → </Link>
                        </button>
                    </div>
                </div>
            </div>

            {/* Tailwind Custom Animation Styles */}
            <style jsx>{`
                .animate-marquee {
                    animation: marquee 25s linear infinite;
                }
                .hover\\:pause-marquee:hover {
                    animation-play-state: paused;
                }
                @keyframes marquee {
                    0% {
                        transform: translateX(0%);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>
        </div>
    );
}
