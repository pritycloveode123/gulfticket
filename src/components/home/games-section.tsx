export default function GulfTicketGamesSection() {
    return (
        <div className="w-full bg-gray-100 py-16 px-4">

            <div className="w-full h-1 bg-[#DF911A] mb-12"></div>

            <div className="max-w-5xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-8">
                    <h2 className="text-[#DF911A] font-bold text-2xl mb-2">GULF TICKET</h2>
                    <h3 className="text-[#DF911A] font-bold text-3xl mb-6">WHAT IS IT?</h3>
                    <p className="text-black text-base leading-relaxed text-justify  mb-8">
                        Gulf Ticket is an online lottery platform originating from the United Arab Emirates (UAE) that was established to create a new and unique lottery experience. We are not just a lottery trading channel, but also a developer of unique and tailor-made lottery games that are not available anywhere else in the world.
                    </p>
                </div>

                {/* Games Grid - 2 rows x 3 columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {/* Row 1 */}
                    {/* Lucky1 Image */}
                    <div className="w-full h-48 rounded-lg overflow-hidden border-3 border-[#DF911A]">
                        <img
                            src="https://gulfticket-th.com/wp-content/uploads/2025/04/2-Lucky1.jpg"
                            alt="Lucky1 Live Draw"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Rush3 Image */}
                    <div className="w-full h-48 rounded-lg overflow-hidden border-3 border-[#DF911A]">
                        <img
                            src="https://gulfticket-th.com/wp-content/uploads/2025/04/4-Rush3.png"
                            alt="Rush3 Live Draw"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Dream5 Image */}
                    <div className="w-full h-48 rounded-lg overflow-hidden border-3 border-[#DF911A]">
                        <img
                            src="https://gulfticket-th.com/wp-content/uploads/2025/04/1-Dream5.jpg"
                            alt="Dream5 Live Draw"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Row 2 */}
                    {/* Magic5 Image */}
                    <div className="w-full h-48 rounded-lg overflow-hidden border-3 border-[#DF911A]">
                        <img
                            src="https://gulfticket-th.com/wp-content/uploads/2025/04/3-Magic5.png"
                            alt="Magic5 Live Draw"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Fortune5 Image */}
                    <div className="w-full h-48 rounded-lg overflow-hidden border-3 border-[#DF911A]">
                        <img
                            src="https://gulfticket-th.com/wp-content/uploads/2025/04/5-Fortune6.png"
                            alt="Fortune5 Live Draw"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Super6 Image */}
                    <div className="w-full h-48 rounded-lg overflow-hidden border-3 border-[#DF911A]">
                        <img
                            src="https://gulfticket-th.com/wp-content/uploads/2025/04/6-Super6.png"
                            alt="Super6 Live Draw"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Bottom Description */}
                <div className="text-center text-gray-800 mb-8 space-y-4 text-justify max-w-5xl">
                    <p className="text-gray-800 text-base leading-relaxed   mx-auto">
                        All our games are designed to provide players with real excitement and a fair and transparent chance to win. Popular games like Rush3, which draws 3 times a day, Lucky1, which is easy to play by selecting a single number, as well as Dream5, Magic5, Super6 and Fortune6, are all developed to suit different styles of players.
                    </p>
                    <p>We have carefully designed the system with trust, safety and the best experience for all players in mind.</p>
                    <p>
                        To support players in Thailand, Gulf Ticket has designed a system specifically for Thais, supporting full mobile access, with a Thai language menu, and easy-to-use domestic payment channels such as TrueMoney Wallet, PromptPay, SCB, Krung Thai, and Bangkok Bank.
                    </p>
                    <p>Whether you prefer a fast-paced thrill or wait for the weekly jackpot, Gulf Ticket has a full range of lottery games to choose from, with real money prizes and a transparent display system that allows you to check every draw.</p>
                    <p>In addition, Gulf Ticket is committed to developing a sustainable society, inspired by the ideas of His Highness Sheikh Mohammed bin Rashid Al Maktoum, the UAE's leader, who prioritizes the happiness of his people, the environment and the future of society.
                    </p>
                    <p>One of the projects that reflects our commitment is the Palm Tree Plantation Project, which uses a portion of the proceeds from lottery sales to plant trees, increase green spaces and promote sustainability in the region.</p>
                    <p>We believe that “Every Lottery Ticket is Hope”, not just a chance to win, but an opportunity to change lives, inspire and spread positive energy to both players and the community. Gulf Ticket is not just an entertainment platform, but a bridge to a better future for everyone.</p>
                    <div className="mt-8 flex items-center justify-center">
                        <button className=" font-semibold text-[#DF911A] text-2xl">
                            Browse all →
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}