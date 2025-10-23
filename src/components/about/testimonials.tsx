import { Testimonial, testimonials } from "@/constants/testimonials";
import Marquee from "react-fast-marquee";

interface TestimonialProps {
  testimonial: Testimonial;
}

function TestimonialItem({ testimonial }: TestimonialProps) {
  return (
    <div className="flex flex-col justify-center items-center px-8 border-r-1 min-h-[200px] text-center">
      <div className="space-y-2 max-w-[45ch]">
        <p>{testimonial.testimonial}</p>
        <p className="text-sm">- {testimonial.name}</p>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <div className="flex flex-col bg-[#faf8f4] pb-8">
      <div className="border-b-1 text-center">
        <h3 className="py-8 text-3xl">Praise for At Sidewalks</h3>
      </div>
      <div className="flex flex-1 pt-8">
        <Marquee style={{ margin: "auto" }}>
          {testimonials.map((testimonial, index) => (
            <TestimonialItem key={index} testimonial={testimonial} />
          ))}
        </Marquee>
      </div>
    </div>
  );
}
