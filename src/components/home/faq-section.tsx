'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: ' Is GulfTicket legal for Malaysians?',
        answer:
            'GulfTicket operates under international standards, fully licensed and insured for global operation. Malaysians aged 18+ can safely participate.',
    },
    {
        question: ' What’s the minimum deposit?',
        answer:
            'Start with RM50.',
    },
    {
        question: ' How fast are withdrawals?',
        answer:
            'Winnings are transferred directly to Malaysian banks within 24 hours.',
    },
    {
        question: 'Can I watch live draws?',
        answer: "Yes — all draws are live-streamed with full transparency daily.",
    },

];

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-white py-20" id="faqs">
            <div className="container mx-auto px-6 ">
                {/* Left Side */}
                <div>
                    <h2 className="text-3xl md:text-3xl font-bold text-[#DF911A] mb-6  text-center">
                        Frequently Asked Questions (FAQs) <br />

                    </h2>
                </div>


                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl border border-dashed border-gray-300 shadow-sm transition-all"
                        >
                            <button
                                onClick={() => toggle(index)}
                                className="flex items-center justify-between w-full px-6 py-5 text-left"
                            >
                                <h3 className="text-lg font-semibold text-gray-900">
                                    Q. {faq?.question}
                                </h3>
                                {openIndex === index ? (
                                    <Minus className="text-black w-5 h-5" />
                                ) : (
                                    <Plus className="text-black w-5 h-5" />
                                )}
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 px-6 ${openIndex === index ? 'max-h-[500px] pb-5' : 'max-h-0'
                                    }`}
                            >
                                <div className="text-gray-700 text-base leading-relaxed">
                                    {faq?.answer}
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
