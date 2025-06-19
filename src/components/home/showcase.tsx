'use client';

import DynamicButton from '../common/button';

const testimonials = [
    {
        id: 1,
        text: '"I started with RM50 — won RM10,000 within my first week!"',
        name: 'Azlan, KL',
    },
    {
        id: 2,
        text: '"Fast cashout to my Maybank account, highly trusted platform."',
        name: 'Siti, JB',
    },
    {
        id: 3,
        text: '"Love the daily draws, no waiting, easy to join and play."',
        name: ' Mr. Lim, Penang',
    },
];

export default function GulfTicketTestimonials() {
    return (
        <>
            <div className="bg-gradient-to-b from-gray-100 to-white text-center py-6 sm:py-12" id="winners">
                <h4 className="text-xl sm:text-2xl font-semibold text-[#DF911A] mb-1 sm:mb-2">
                    Real Malaysian
                </h4>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#DF911A] mb-6 sm:mb-10">
                    Winners
                </h2>

                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="px-2 sm:px-4">
                                <div className="border-2 border-orange-300 rounded-lg p-4 sm:p-6 bg-white shadow-md flex flex-col items-center relative">
                                    <p className="mt-4 text-sm sm:text-base font-semibold text-gray-800 mb-3 text-center">
                                        {testimonial.text}
                                    </p>
                                    <p className="text-[#DF911A] text-sm font-bold italic mb-12 sm:mb-16">
                                        — {testimonial.name}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="pt-8 sm:pt-12">
                    <DynamicButton text="See More Winner Stories" size="lg" />
                </div>
            </div>

        </>


    );
}
