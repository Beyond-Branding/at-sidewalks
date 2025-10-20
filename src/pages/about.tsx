import { AboutBanner } from "@/components/about/about-banner";
import { AboutContent } from "@/components/about/about-content";
import { Testimonials } from "@/components/about/testimonials";

export default function AboutPage() {
  return (
    <div>
      <AboutBanner />
      <AboutContent />
      <Testimonials />
    </div>
  );
}
