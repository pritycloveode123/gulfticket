
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

// const cardData = [
//     { id: 1, title: 'Lucky 1	RM50,000	Daily', img: '/Homepage-Promo-1.jpg' },
//     { id: 2, title: 'Rush 3	    RM80,000	Daily', img: '/Homepage-Promo-2.jpg' },
//     { id: 3, title: 'Dream 5	RM1,150,000	Daily', img: '/Homepage-Promo-3.jpg' },
//     { id: 4, title: 'Magic 5	RM575,000	Daily', img: '/Homepage-Promo-4.jpg' },
//     { id: 5, title: 'Fortune 6	RM5,750,000	Daily', img: '/Homepage-Promo-1.jpg' },
//     { id: 6, title: 'Super 5	RM115,000,000	Daily', img: '/Homepage-Promo-2.jpg' },
// ];

export default function GulfTicketRewarded() {
    return (
        <div className="bg-white py-12" id='promotion'>
            <div className="container mx-auto px-6">

                {/* Top Headings */}
                <div className="text-center mb-12">
                    {/* <h1 className="text-[#DF911A] text-2xl font-bold tracking-wider uppercase mb-2">
                       Get rewarded

                    </h1> */}
                    <h2 className="text-[#DF911A] text-3xl font-bold uppercase">
                        Get rewarded
                    </h2>
                </div>

                {/* Step Cards with Icons */}
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {steps.map(({ icon: Icon, title, desc }, index) => (
                        <div
                            key={index}
                            className="bg-white border border-[#DF911A] rounded-xl p-4 text-center shadow-sm hover:shadow-[0_4px_20px_rgba(223,145,26,0.3)] transition duration-300"
                        >
                            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#DF911A] text-white flex items-center justify-center">
                                <Icon className="w-6 h-6" />
                            </div>
                            <h5 className="font-semibold text-lg text-gray-800 mb-2">{title}</h5>
                            <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                        </div>
                    ))}
                </section>

                {/* Promo Cards */}
                {/* <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cardData.map((card) => (
                        <div
                            key={card.id}
                            className="bg-white rounded-lg border border-[#DF911A] overflow-hidden transition-shadow hover:shadow-[0_-4px_8px_0_rgba(223,145,26,0.4),4px_0_8px_0_rgba(223,145,26,0.4),-4px_0_8px_0_rgba(223,145,26,0.4)]"
                        >
                        
                            <div className="relative">
                                <Image
                                    src={card.img}
                                    alt={card.title}
                                    width={949}
                                    height={212}
                                    className="w-full h-40 object-cover py-4 "
                                />
                            </div>

                            <div className="text-center p-4">
                                <h3 className="text-lg font-bold text-gray-800 mb-2">{card.title}</h3>

                            </div>
                        </div>
                    ))}

                </section> */}
                {/* <div className='mt-6 flex justify-center'>
                    <DynamicButton text=" Play Now & Join Today’s Draw" size="lg" />
                </div> */}

            </div>
        </div>
    );
}
