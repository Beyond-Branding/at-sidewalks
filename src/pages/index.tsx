import { HeroCard } from "@/components/common/hero-card";
import { LastestBlogs } from "@/components/home/latest-blogs";
import { ShopReadAndDiscover } from "@/components/home/shop-and-discover";
import { MustReadStories } from "@/components/home/must-read-stories";

export default function HomePage() {
  return (
    <div>
      <HeroCard />
      <LastestBlogs />
      <ShopReadAndDiscover />
      <MustReadStories />
    </div>
  );
}
