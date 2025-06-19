import ImageContentSection from "@/components/common/winners";
import GulfTicketBanner from "@/components/home/banner";
import FaqSection from "@/components/home/faq-section";
import GulfTicketGamesSection from "@/components/home/games-section";
import GulfTicketAppSection from "@/components/home/GulfTicketAppSection";
import HeroCarousel from "@/components/home/hero-section";
import GulfTicketThailand from "@/components/home/popular-games";
import StatsBanner from "@/components/home/promotions";
import GulfTicketRewarded from "@/components/home/rewarded";
import GulfTicketTestimonials from "@/components/home/showcase";
import GamePrizeTable from "@/components/home/prizetable";
import TrustSection from "@/components/home/TrustSection";
import VideosTesti from "@/components/home/vedios-section";


export default function Home() {
  return (
    <>
      <HeroCarousel />
      <GulfTicketBanner />
      <VideosTesti />
      <StatsBanner />
      <GulfTicketGamesSection />
      <GamePrizeTable />
      <GulfTicketThailand />
      <GulfTicketTestimonials />
      <TrustSection />
      <GulfTicketRewarded />
      {/* <ImageContentSection
        imageSrc="/price 1.jpg"
        subtitle="START PLAYING TODAY!"
        title="REAL WINNERS IN THAILAND"
        description={`“I played Dream5 while waiting at Don Mueang Airport. The first time I got 10,000 baht!” – Narong, Bangkok
        “It’s very easy to play and withdraw money conveniently. What I like the most is that it supports PromptPay.” – May, Khon Kaen`}
        buttonText="Start winning"
        imagePosition="right"
      /> */}

      <ImageContentSection
        imageSrc="/price 2.jpg"
        subtitle="KEEP YOUR ACCOUNT SECURE WITH US"
        title="SECURITY YOU CAN TRUST"
        imagePosition="left"
        buttonText="Start winning"
        description={
          <ul className="list-disc list-inside space-y-2 text-left">
            <li>Transactions are encrypted with SSL.</li>
            <li>Two-Factor Authentication (2FA)</li>
            <li>Real-time risk monitoring and fraud prevention</li>
            <li>KYC system to verify identity before withdrawing money</li>
            <li>Support team in both Malay and English are ready to help you</li>
          </ul>
        }
      />
      <ImageContentSection
        imageSrc="/price 3.jpg"
        subtitle="Download the app"
        title="Summary – A new alternative for playing the lottery for  people"
        description={`Gulf Ticket is revolutionizing the online lottery experience for  players. No more queuing or waiting in-store to buy. Just sign up and you can play immediately with secure payment system and real prizes waiting for you. 

Sign up today, choose your lucky number and let Gulf Ticket Malaysia be your new path to fortune!`}
        buttonText="Join us"
        imagePosition="right"
      />
      <GulfTicketAppSection />
      <FaqSection />


    </>
  );
}
