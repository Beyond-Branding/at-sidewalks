import Marquee from "react-fast-marquee";

function Testimonial() {
  return (
    <div className="flex flex-col justify-center items-center px-8 border-r h-full text-center">
      <div className="size-20">
        <img
          className="w-auto h-full"
          src="https://cupofjo.com/wp-content/uploads/2015/02/martha-stewart.png"
        />
      </div>
      <div>"One of the top lifestyle websites for women" and one of the</div>
    </div>
  );
}

export function Testimonials() {
  return (
    <div className="flex flex-col bg-[#EBB338] pb-8">
      <div className="border-b-1 text-center">
        <h3 className="py-8 text-3xl">Praise for At Sidewalks</h3>
      </div>
      <div className="flex flex-1 pt-8">
        <Marquee style={{ margin: "auto" }}>
          {Array.from({ length: 10 }).map((testimonial, index) => (
            <Testimonial key={index} />
          ))}
        </Marquee>
      </div>
    </div>
  );
}
