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
        <div className="w-full bg-white text-black">
            <div className="w-full h-1 bg-[#DF911A]" />

            <div className="py-8 sm:py-16 px-4 sm:px-6">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 items-center justify-center">
                        {stats.map((item, index) => (
                            <div key={index} className="flex items-center gap-4 sm:gap-5">
                                <div className="w-14 h-14 sm:w-20 sm:h-20 relative flex-shrink-0">
                                    <Image
                                        src={item.icon}
                                        alt={item.label}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-2xl sm:text-4xl font-extrabold text-[#DF911A] mb-1">
                                        {item.value}
                                    </h3>
                                    <p className="text-xs sm:text-base font-semibold uppercase tracking-wide text-black">
                                        {item.label}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-full h-1 bg-[#DF911A]" />
        </div>
    );
};

export default StatsBanner;
