import GulfTicketBanner from "@/components/home/banner";
import GulfTicketGamesSection from "@/components/home/games-section";
import HeroCarousel from "@/components/home/hero-section";
import GulfTicketThailand from "@/components/home/popular-games";
import GulfTicketShowcase from "@/components/home/showcase";


export default function Home() {
  return (
    <>
      <HeroCarousel />
      <GulfTicketBanner />
      <GulfTicketGamesSection />
      <GulfTicketShowcase />
      <GulfTicketThailand />

    </>
  );
}
