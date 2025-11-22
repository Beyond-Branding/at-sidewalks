import { Variants } from "motion";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { searchPosts } from "@/controllers/posts.controller";
import Link from "next/link";

export default function SearchDrawer({ isOpen, onClose }: any) {
  const [search, setSearch] = useState("");

  const { data, isLoading } = useQuery({
    queryKey: ["blogs", search],
    queryFn: async () =>
      searchPosts({
        search,
      }),
  });

  const variants: Variants = {
    open: { x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
    closed: {
      x: "-100%",
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  const overlayVariants: Variants = {
    open: { opacity: 1, display: "block" },
    closed: { opacity: 0, display: "none" },
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <motion.aside
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        exit="closed"
        variants={variants}
        className="top-0 bottom-0 left-0 z-[1000] isolate fixed bg-primary px-6 pt-16 pb-4 w-screen max-w-[540px] overflow-y-auto"
      >
        <div className="z-10 flex flex-col space-y-4 h-full">
          <div className="flex justify-center items-center border-gray-200 border-b-[1px]">
            <input
              type="text"
              placeholder="search articles"
              className="mb-2 px-2 pb-2 focus-within:outline-0 w-full"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="pb-2 cursor-pointer">
              <Image
                className="m-auto size-4"
                src="/assets/ui/search.svg"
                height={48}
                width={48}
                alt="Search Button"
              />
            </button>
          </div>

          <div className="flex-[100%] space-y-6 h-full overflow-y-auto">
            {isLoading && (
              <div className="flex w-full h-full">
                <p className="m-auto">loading...</p>
              </div>
            )}

            {!isLoading &&
              data?.blogs?.map((blog: any) => (
                <Link
                  key={blog?.id}
                  href={`/blog/${blog?.id}`}
                  className="block"
                >
                  <div className="flex gap-6">
                    os
                    <div className="w-28 h-36 overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        src={blog.image}
                        alt="Blog Image"
                      />
                    </div>
                    <div className="flex-1 py-4 pr-5">
                      <h3
                        className="pb-2 font-medium"
                        dangerouslySetInnerHTML={{
                          __html: blog?.title?.rendered,
                        }}
                      ></h3>
                      <p
                        className="text-sm"
                        dangerouslySetInnerHTML={{
                          __html: blog?.excerpt?.rendered,
                        }}
                      ></p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </motion.aside>

      {/* Overlay */}
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        exit="closed"
        variants={overlayVariants}
        className="z-50 fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => onClose()}
      ></motion.div>
    </>
  );
}
