import { Header } from "@/components/common/header";
import { HeroCard } from "@/components/common/hero-card";
import { NewArrivals } from "@/components/home/new-arrivals";
import { ShopReadAndDiscover } from "@/components/home/shop-and-discover";
import { MustReadStories } from "@/components/home/must-read-stories";
import { Footer } from "@/components/common/footer";

export default function HomePage() {
  return (
    <div>
      <Header />
      <HeroCard />
      <NewArrivals />
      <ShopReadAndDiscover />
      <MustReadStories />
      <Footer />
    </div>
  );
}
