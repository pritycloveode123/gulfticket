import DynamicButton from "../common/button";

export default function GulfTicketBanner() {
    return (
        <div className="w-full bg-gray-100 py-12 ">


            <div className="container mx-auto text-center">
                {/* Main heading */}
                <h1 className="text-[2rem]  font-bold text-[#E99F00] mb-6 tracking-wide">
                    GULF TICKET – THAILAND'S TRUSTED ONLINE LOTTERY PLATFORM
                </h1>

                {/* First paragraph */}
                <p className="text-gray-800  text-base mb-6 leading-relaxed  mx-auto">
                    <span className="text-[#E99F00]">Gulf Ticket</span> is the destination for{' '}
                    <span className="font-semibold text-gray-900">online lotteries</span> that Thais trust. Whether you are in Bangkok, Chiang Mai or Phuket, we bring the excitement of international lottery draws to your fingertips.
                </p>

                {/* Second paragraph */}
                <p className="text-gray-800 text-base mb-8 leading-relaxed max-w-5xl mx-auto">
                    With exciting <span className="font-semibold text-gray-900">lottery games</span>, <span className="font-semibold text-gray-900">fast payouts</span> and{' '}
                    <span className="font-semibold text-gray-900">local payment options</span>,{' '}
                    <span className="text-[#E99F00]">Gulf Ticket Thailand</span> is where you can{' '}
                    <span className="font-semibold text-gray-900">play and win big every day!</span>
                </p>


                <DynamicButton text="Join GULFTICKET now!" size="lg" />

            </div>
        </div>
    );
}