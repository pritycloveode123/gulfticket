
import { Gift, UserPlus, RotateCcw, BadgePercent } from 'lucide-react';


const steps = [
    {
        icon: Gift,
        title: 'Free Card for New Players',
        desc: 'Get free lucky draw tickets instantly when you make your first deposit.',
    },
    {
        icon: UserPlus,
        title: 'Refer a friend, get a bonus',
        desc: 'Invite friends to play and get a 10% credit bonus from their first ticket purchase.',
    },
    {
        icon: RotateCcw,
        title: 'Weekly Cashback',
        desc: 'Up to 15% cashback on non-winning tickets',
    },
    {
        icon: BadgePercent,
        title: 'Discount when buying multiple tickets',
        desc: 'Buy a package of tickets in advance (3, 5 or 10 tickets) and receive a discount of up to 20%.',
    }
];


export default function GulfTicketRewarded() {
    return (
        <div className="bg-white py-6 sm:py-12" id="promotion">
            <div className="container mx-auto px-4 sm:px-6">
                {/* Top Headings */}
                <div className="text-center mb-8 sm:mb-12">
                    <h2 className="text-[#DF911A] text-2xl sm:text-3xl font-bold uppercase">
                        Get rewarded
                    </h2>
                </div>

                {/* Step Cards with Icons */}
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
                    {steps.map(({ icon: Icon, title, desc }, index) => (
                        <div
                            key={index}
                            className="bg-white border border-[#DF911A] rounded-xl p-3 sm:p-4 text-center shadow-sm hover:shadow-[0_4px_20px_rgba(223,145,26,0.3)] transition duration-300"
                        >
                            <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 rounded-full bg-[#DF911A] text-white flex items-center justify-center">
                                <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                            <h5 className="font-semibold text-base sm:text-lg text-gray-800 mb-1 sm:mb-2">
                                {title}
                            </h5>
                            <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                        </div>
                    ))}
                </section>
            </div>
        </div>

    );
}
