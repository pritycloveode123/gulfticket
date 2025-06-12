import React from "react";

const steps = [
    {
        number: 1,
        title: "SIGN UP OR LOG IN",
        description: `START BY SIGNING UP ON THE GULF TICKET WEBSITE BY FILLING IN BASIC INFORMATION SUCH AS EMAIL, PHONE NUMBER AND SETTING A PASSWORD. ONCE YOU HAVE REGISTERED, YOU CAN LOG IN TO GET STARTED RIGHT AWAY. IF YOU ALREADY HAVE AN ACCOUNT, YOU CAN LOG IN WITHOUT HAVING TO SIGN UP AGAIN.`,
        icon: "/how-to-play1.png"
    },
    {
        number: 2,
        title: "TOP UP YOUR ACCOUNT",
        description: `AFTER LOGGING IN, YOU CAN TOP UP VIA THE SYSTEM’S SUPPORTED CHANNELS, WHETHER IT’S BANK TRANSFER, ELECTRONIC CHANNELS, OR OTHER WALLETS SPECIFIED IN THE SYSTEM. CHOOSE THE METHOD THAT’S CONVENIENT FOR YOU. THE SYSTEM WILL AUTOMATICALLY TOP UP YOUR CREDIT WITHIN A FEW MINUTES.`,
        icon: "/how-to-play2.png"
    },
    {
        number: 3,
        title: "SELECT THE LOTTERY GAME YOU WANT TO PLAY.",
        description: `GULF TICKET OFFERS A VARIETY OF LOTTERY GAMES TO CHOOSE FROM, SUCH AS RUSH3, LUCKY1, DREAM5, MAGIC5, AND SUPER6, EACH WITH DIFFERENT FORMATS AND DRAW TIMES. YOU CAN CHOOSE THE GAME THAT SUITS YOUR STYLE AND CHECK THE DRAW ROUNDS ON THE MAIN PAGE OF THE WEBSITE.`,
        icon: "/how-to-play3.png"
    },
    {
        number: 4,
        title: "SELECT THE DESIRED NUMBER OR TICKET",
        description: `IN EACH GAME, YOU CAN CHOOSE YOUR NUMBERS MANUALLY OR LET THE SYSTEM AUTOMATICALLY GENERATE A RANDOM NUMBER. AFTER CHOOSING YOUR NUMBERS, CHECK THE DETAILS AND CONFIRM YOUR TICKET PURCHASE. NOW YOU ARE READY TO ENTER THE NEXT ROUND OF PRIZES.`,
        icon: "/how-to-play4.png"
    },
    {
        number: 5,
        title: "CHECK THE LOTTERY RESULTS VIA LIVE BROADCAST OR CHECK BACK.",
        description: `WHEN THE DRAW TIME COMES, YOU CAN WATCH THE LIVE BROADCAST ON THE WEBSITE OR CHECK THE RESULTS IN THE SYSTEM. IF YOUR NUMBER WINS, THE SYSTEM WILL AUTOMATICALLY ADJUST THE PRIZE AMOUNT INTO YOUR ACCOUNT.`,
        icon: "/how-to-play5.png"
    },
];

export default function HowToPlayGulfTicket() {
    return (
        <div className=" text-white text-center">
            <h2 className="text-[#DF911A] bg-white text-3xl font-bold py-8 border-b-4 border-[#DF911A] ">
                HOW TO PLAY GULF TICKET
            </h2>
            <div className=" bg-gradient-to-b from-[#e0e0e0] to-[#272727] p-6 ">
                <div className=" max-w-5xl mx-auto text-white text-center  flex  border-[#DF911A] divide-x divide-[#DF911A]">
                    {steps.map((step) => (
                        <div
                            key={step.number}
                            className="flex-1 px-4 py-6 text-xs text-white flex flex-col items-center justify-start"
                        >
                            <img src={step.icon} alt={`icon${step.number}`} className="w-30 h-30 mb-2" />
                            <div className="bg-white text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mb-2">
                                {step.number}
                            </div>
                            <h3 className="text-[#DF911A] font-bold uppercase  text-xl mb-2">
                                {step.title}
                            </h3>
                            <p className="text-base text-center">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
