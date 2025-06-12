import Image from 'next/image';
import DynamicButton from '../common/button';
const cardData = [
    { id: 1, title: 'Lucky1 Daily Draw', img: '/Homepage-Promo-1.jpg' },
    { id: 2, title: 'Rach3 Daily Draw', img: '/Homepage-Promo-2.jpg' },
    { id: 3, title: 'Dream 5 ฿ 1000000*', img: '/Homepage-Promo-3.jpg' },
    { id: 4, title: 'Magic 5 ฿ 500000*', img: '/Homepage-Promo-4.jpg' },
];

export default function GulfTicketRewarded() {
    return (
        <>
            <div className=" bg-white py-12 ">
                <div className='container mx-auto '>
                    <div className="text-center mb-8">
                        <h1 className="text-[#DF911A] text-sm sm:text-base font-semibold tracking-wider uppercase mb-2">
                            Get rewarded
                        </h1>
                        <h2 className="text-[#DF911A] text-3xl  font-bold uppercase">
                            Promotions for Thai players
                        </h2>
                    </div>

                    <div className="space-y-2 text-black ">
                        {/* Step 1 */}
                        <div className="text-center">
                            <h5 className="font-semibold  mb-2 text-sm sm:text-base">
                                Step 1: Sign up for free
                            </h5>
                            <p className="text-sm sm:text-base leading-relaxed">
                                Register with your mobile number and email. Quickly verify your identity with OTP code for account security.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="text-center">
                            <h5 className="font-semibold mb-2 text-sm sm:text-base">
                                Step 2: Choose a game to play.
                            </h5>
                            <p className="text-sm sm:text-base leading-relaxed">
                                View the draw table and winning rates of each game. Choose a game that suits your playing style.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="text-center">
                            <h5 className="font-semibold mb-2 text-sm sm:text-base">
                                Step 3: Choose your numbers.
                            </h5>
                            <p className="text-sm sm:text-base leading-relaxed">
                                Choose your own numbers or use the Auto-Pick system.
                            </p>
                        </div>

                        {/* Step 4 */}
                        <div className="text-center">
                            <h5 className="font-semibold  mb-2 text-sm sm:text-base">
                                Step 4: Pay securely with Thai Baht (THB).
                            </h5>
                            <p className="text-sm sm:text-base leading-relaxed">
                                Choose popular Thai payment channels such as TrueMoney, PromptPay, SCB and more.
                            </p>
                        </div>

                        {/* Step 5 */}
                        <div className="text-center">
                            <h5 className="font-semibold  mb-2 text-sm sm:text-base">
                                Step 5: Watch the Live Draw & Notify Winners
                            </h5>
                            <p className="text-sm sm:text-base leading-relaxed">
                                The system will notify the winners via SMS, email and LINE. You can also watch the live draw on our website or YouTube.
                            </p>
                        </div>
                    </div>


                    {/* image section  stated from here */}

                    <div className="w-full mt-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {cardData.map((card) => (
                                <div
                                    key={card.id}
                                    className="bg-white rounded-lg border border-[#DF911A] overflow-hidden transition-shadow hover:shadow-[0_-4px_8px_0_rgba(223,145,26,0.4),4px_0_8px_0_rgba(223,145,26,0.4),-4px_0_8px_0_rgba(223,145,26,0.4)]"
                                >
                                    {/* Image */}
                                    < div className="relative" >
                                        <Image
                                            src={card.img}
                                            alt={card.title}
                                            width={949}
                                            height={512}
                                            className="w-full object-cover p-4"
                                        />
                                    </div>

                                    {/* Text + Button */}
                                    <div className=" items-center px-4 py-4">
                                        <h3 className="text-lg font-bold text-gray-800">{card.title}</h3>
                                        <DynamicButton text="register" size="sm" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div >
                </div>
            </div >

        </>
    );
}