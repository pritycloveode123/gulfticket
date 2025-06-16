"use client";



export default function GulfTicketGamesSection() {
    return (
        <div className="w-full bg-gray-100 py-16 px-6 " id="about-us">
            <div className="container mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-[#DF911A] font-bold text-2xl mb-2">Why Malaysians Trust</h2>
                    <h3 className="text-[#DF911A] font-bold text-3xl mb-6"> GulfTicket</h3>
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
                <div className="text-gray-800 mt-12 space-y-5  text-center">
                    <p>
                        Internationally Licensed & Fully Regulated Platform
                    </p>
                    <p>
                        All transactions regulated & insured by globally recognized insurance authority
                    </p>
                    <p>
                        Licensed Lottery Technology Provider (certified draw system & algorithm)

                    </p>
                    <p>
                        Fully transparent live draws conducted daily
                    </p>
                    <p>
                        80%–90% winning rate across daily games

                    </p>
                    <p>
                        Deposit from RM50 (supports FPX, DuitNow, Touch &apos;n Go, GrabPay, Maybank, CIMB, RHB, etc.)

                    </p>
                    <p>
                        Fast withdrawals to Malaysian banks within 24 hours
                    </p>
                    <p>
                        End-to-end encryption & global fraud prevention system

                    </p>
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
