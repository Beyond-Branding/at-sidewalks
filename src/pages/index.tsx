import { HeroCard } from "@/components/common/hero-card";
import { NewArrivals } from "@/components/home/new-arrivals";
import { ShopReadAndDiscover } from "@/components/home/shop-and-discover";
import { MustReadStories } from "@/components/home/must-read-stories";

export default function HomePage() {
  return (
    <div>
      <HeroCard />
      <NewArrivals />
      <ShopReadAndDiscover />
      <MustReadStories />
    </div>
  );
}
