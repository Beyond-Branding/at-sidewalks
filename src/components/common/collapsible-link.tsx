import { Collapsible } from "radix-ui";
import Image from "next/image";
import { categories } from "@/constants/categories";
import Link from "next/link";

export function CollapsibleLink() {
  return (
    <Collapsible.Root>
      <Collapsible.Trigger asChild>
        <div className="flex justify-between items-center pb-2 border-gray-200 border-b-[0.25px]">
          <button className="font-bold pointer-events-none">categories</button>
          <div className="size-4">
            <Image
              className="size-full"
              src="/assets/ui/plus.png"
              alt="Plus"
              width={24}
              height={24}
            />
          </div>
        </div>
      </Collapsible.Trigger>
      <Collapsible.Content asChild>
        <div className={`mt-2 text-sm`}>
          {categories.map((category) => (
            <div className="flex gap-2 space-y-4">
              <div className="size-6">
                <Image
                  className="size-full"
                  src={category.image}
                  alt={category.title}
                  height={100}
                  width={100}
                />
              </div>
              <Link href={`/category/${category.id}`} className="lowercase">
                {category.title}
              </Link>
            </div>
          ))}
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
