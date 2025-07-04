'use client';

export default function TrustSection() {
    return (
        <section className="w-full">
            {/* Section 1: Live Draws */}
            <div className="bg-white py-6 sm:py-12 px-4 sm:px-6">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#DF911A] mb-6 sm:mb-8 uppercase">
                        Professional Live Draws
                    </h2>
                    <ul className="space-y-3 sm:space-y-4 text-gray-800 text-sm sm:text-lg flex flex-col items-center">
                        <li className="flex items-center gap-2 text-center">
                            <span>Fully transparent, broadcast live daily</span>
                        </li>
                        <li className="flex items-center gap-2 text-center">
                            <span>Hosted by professional MCs</span>
                        </li>
                        <li className="flex items-center gap-2 text-center">
                            <span>Certified draw algorithm with licensed RNG system</span>
                        </li>
                        <li className="flex items-center gap-2 text-center">
                            <span>Full public display of all results instantly</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Section 2: Regulation & Security */}
            <div className="bg-gradient-to-b from-[#f5f7fa] to-[#e4ecf3] py-6 sm:py-12 px-4 sm:px-6">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#DF911A] uppercase mb-1 sm:mb-2">
                        Regulation & Security
                    </h2>
                    <p className="text-sm sm:text-lg text-black font-semibold mb-4 sm:mb-6">
                        Main Trust Anchor Section
                    </p>

                    <ul className="space-y-3 sm:space-y-4 text-gray-800 text-sm sm:text-lg flex flex-col items-center">
                        <li className="flex items-center gap-2 text-center">
                            <span>Licensed & Globally Regulated</span>
                        </li>
                        <li className="flex items-start gap-2 text-center">
                            <span>GulfTicket operates under international licensing standards.</span>
                        </li>
                        <li className="flex items-start gap-2 text-center">
                            <span>Technology system fully licensed and certified for global lottery operations.</span>
                        </li>
                        <li className="flex items-start gap-2 text-center">
                            <span>Transactions regulated and insured by globally recognized insurance body.</span>
                        </li>
                        <li className="flex items-start gap-2 text-center">
                            <span>KYC verification process ensures full transparency before withdrawals.</span>
                        </li>
                        <li className="flex items-start gap-2 text-center">
                            <span>24/7 Malaysian customer service & support.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

    );
}
