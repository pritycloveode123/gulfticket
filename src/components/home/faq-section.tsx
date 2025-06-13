'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: 'Is Gulf Ticket legal in Thailand?',
        answer:
            'Gulf Ticket operates under international lottery standards with transparency at every stage, allowing players aged 18 and above to legally participate.',
    },
    {
        question: 'What is the minimum amount to bet on the lottery with Gulf Ticket?',
        answer:
            'You can start playing the lottery with Gulf Ticket with just 1 baht . It gives everyone the chance to win prizes, whether they have a large or small budget, they can join in the fun with peace of mind.',
    },
    {
        question: 'How old do you have to be to play?',
        answer:
            'You must be at least 18 years old to play Gulf Ticket.',
    }, ,
    {
        question: 'What activities or fun are there at Gulf Ticket?',
        answer:
            'Gulf Ticket offers exclusive lottery games that cannot be found anywhere else, such as:',
    }, ,
    {
        question: 'How is playing the lottery with Gulf Ticket better?',
        answer:
            'Gulf Ticket is an online lottery platform that has developed its own games directly from the United Arab Emirates (UAE). It comes with a transparent, verifiable, fair prize draw system and also supports Thai language. The automatic deposit-withdrawal system is fast and the support team is available 24 hours a day.',
    }, ,
    {
        question: 'Has anyone ever tried playing Gulf Ticket?',
        answer:
            'There are players from other countries in UAE and Thailand who have participated and won real prizes. You can see reviews and experiences from real users on our review page or social media.',
    }, ,
    {
        question: "Which country's bank account is required for deposit?",
        answer:
            'Gulf Ticket supports a variety of deposit channels, including Thai banks , TrueMoney Wallet , and PromptPay , allowing players to choose a deposit method that is convenient for them, with credit balances updated within minutes.',
    }, ,
    {
        question: 'What time is the lottery draw? How long do I have to wait?',
        answer:
            'Each game has different draw rounds, for example Rush3 will draw 3 times a day (afternoon to evening). Other games will have a draw schedule specified in the system in advance, which players can check the results immediately after the draw.',
    }, ,
    {
        question: 'How do I know if I won?',
        answer:
            'The system will notify you in real time via SMS, LINE, and email , or you can log in to view the results in your personal dashboard.',
    }, ,
    {
        question: 'How can I withdraw my winnings?',
        answer:
            'Prize money will be transferred in Thai Baht to your local bank account or TrueMoney Wallet within 1–3 business days.',
    }, ,
    {
        question: 'Can I play Gulf Ticket from overseas?',
        answer:
            'Yes, you can play from abroad, but payment and language restrictions may apply depending on your country of use.',
    },
];

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-6 ">
                {/* Left Side */}
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6  text-center">
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
                                <p className="text-gray-700 text-base leading-relaxed">
                                    {faq?.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
