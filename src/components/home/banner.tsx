'use client';

import DynamicButton from '../common/button';

export default function GulfTicketBanner() {
    return (
        <div
            className="w-full py-16 bg-cover bg-center bg-no-repeat flex items-center justify-center relative"
            style={{ backgroundImage: "url('/bg2.jpg')" }}
        >
            {/* <div className="absolute inset-0 bg-black/60 z-0"></div> */}

            <div className="relative z-10 max-w-4xl w-full px-6 py-12 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl text-center">
                {/* Heading */}
                <h1 className="text-4xl  font-bold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 drop-shadow-lg">
                    GULF TICKET – THAILAND&apos;S TRUSTED ONLINE LOTTERY PLATFORM
                </h1>

                {/* First paragraph */}
                <p className="text-lg text-black mb-4 leading-relaxed">
                    <span className="text-yellow-400 font-bold">Gulf Ticket</span> is the destination for
                    <span className="font-semibold text-black"> online lotteries</span> that Thais trust. Whether you&apos;re in Bangkok, Chiang Mai, or Phuket, we bring the excitement of international lottery draws to your fingertips.
                </p>

                {/* Second paragraph */}
                <p className="text-lg text-black mb-8 leading-relaxed">
                    With exciting <span className="font-semibold text-black">lottery games</span>, <span className="font-semibold text-black">fast payouts</span>, and
                    <span className="font-semibold text-black"> local payment options</span>, <span className="text-yellow-400 font-bold">Gulf Ticket Thailand</span> is where you can <span className="font-semibold text-black">play and win big every day!</span>
                </p>

                <DynamicButton text="Join GULFTICKET now!" size="lg" />
            </div>
        </div>
    );
}
