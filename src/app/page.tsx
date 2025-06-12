import ImageContentSection from "@/components/common/winners";
import GulfTicketBanner from "@/components/home/banner";
import FaqSection from "@/components/home/faq-section";
import GulfTicketGamesSection from "@/components/home/games-section";
import GulfTicketAppSection from "@/components/home/GulfTicketAppSection";
import HeroCarousel from "@/components/home/hero-section";
import GulfTicketThailand from "@/components/home/popular-games";
import GulfTicketRewarded from "@/components/home/rewarded";
import GulfTicketShowcase from "@/components/home/showcase";


export default function Home() {
  return (
    <>
      <HeroCarousel />
      <GulfTicketBanner />
      <GulfTicketGamesSection />
      <GulfTicketShowcase />
      <GulfTicketThailand />
      <GulfTicketRewarded />
      <ImageContentSection
        imageSrc="/winner1.jpg"
        subtitle="START PLAYING TODAY!"
        title="REAL WINNERS IN THAILAND"
        description={`“I played Dream5 while waiting at Don Mueang Airport. The first time I got 10,000 baht!” – Narong, Bangkok
        “It’s very easy to play and withdraw money conveniently. What I like the most is that it supports PromptPay.” – May, Khon Kaen`}
        buttonText="Start winning"
        imagePosition="right"
      />
      <FaqSection />
      <ImageContentSection
        imageSrc="/winner2.jpg"
        subtitle="KEEP YOUR ACCOUNT SECURE WITH US"
        title="SECURITY YOU CAN TRUST"
        description={`1 Transactions are encrypted with SSL.
2 Two-Factor Authentication (2FA)
3 Real-time risk monitoring and fraud prevention
4 KYC system to verify identity before withdrawing money, increasing security
5 Support team in both Thai and English are ready to help you every step of the way.`}
        buttonText="Start winning"
        imagePosition="left"
      />

      <GulfTicketAppSection />

      <ImageContentSection
        imageSrc="/winner3.png"
        subtitle="Download the app"
        title="Summary – A new alternative for playing the lottery for Thai people"
        description={`Gulf Ticket is revolutionizing the online lottery experience for Thai players. No more queuing or waiting in-store to buy. Just sign up and you can play immediately with secure payment system and real prizes waiting for you. 

Sign up today, choose your lucky number and let Gulf Ticket Thailand be your new path to fortune!`}
        buttonText="Join us"
        imagePosition="right"
      />

    </>
  );
}
