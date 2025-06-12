'use client';
import Image from 'next/image';

const StatsBanner = () => {
    const stats = [
        {
            icon: '/Daily-Prized-out.png',
            value: '10 M',
            label: 'DAILY REWARD ISSUED',
        },
        {
            icon: '/Daily-Tournaments.png',
            value: '200',
            label: 'DAILY TOURNAMENTS',
        },
        {
            icon: '/Fast-Payout.png',
            value: '24 /7',
            label: 'FAST PAYOUT',
        },
    ];

    return (
        <div className="w-full relative">
            {/* Top orange border */}
            <div className="w-full h-1 bg-[#DF911A]"></div>

            {/* Main banner with gradient background */}
            <div
                className="w-full py-20 px-4"
                style={{
                    background: 'linear-gradient(135deg,rgb(211, 14, 188) 0%,rgb(92, 9, 101) 30%,rgb(63, 9, 189) 70%,rgb(55, 5, 141) 100%)',
                    backgroundImage: "url('/bg_image_rev01-scaled.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'overlay'
                }}
            >
                <div className="container mx-auto flex justify-center items-center">
                    <div className="flex justify-between items-center w-full max-w-6xl">
                        {stats.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-x-6 text-white"
                            >
                                <div className="flex-shrink-0">
                                    <Image
                                        src={item.icon}
                                        alt={item.label}
                                        width={150}
                                        height={150}
                                        className="object-contain"
                                    />
                                </div>
                                <div className="text-left">
                                    <h3 className="text-5xl font-black text-[#75E6FF] mb-1 tracking-tight">{item.value}</h3>
                                    <p className="text-lg font-bold text-white uppercase tracking-wide leading-tight">{item.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom orange border */}
            <div className="w-full h-1 bg-[#DF911A]"></div>
        </div>
    );
};

export default StatsBanner;