import { useParams } from "next/navigation";
import Image from "next/image";
import { useRouter } from "next/router";
import { Button } from "@/components/common/button";
import { LastestBlogs } from "@/components/home/latest-blogs";

export default function CategoryPage() {
  const router = useRouter();
  const { category } = router.query as { category: string };

  return (
    <div>
      <section id="hero-section" className="-top-12 relative h-screen">
        <div className="z-10 absolute inset-0 flex justify-center items-center bg-transparent">
          <div className="bg-black/50 py-12 w-[60%] text-white text-center">
            <div className="mb-2">
              <h2 className="text-3xl">Category: {category}</h2>
              <p>On reimagining comforting Asian American flavors</p>
            </div>

            <div className="space-y-4">
              <p>by Victorian Kwon</p>
              <Button>Read More</Button>
            </div>
          </div>
        </div>

        <div className="absolute inset-0">
          <Image
            className="w-full h-full object-cover"
            src="/assets/category_banner.jpg"
            alt="Beauty"
            height={2048}
            width={1365}
          />
        </div>
      </section>

      <LastestBlogs />
    </div>
  );
}
