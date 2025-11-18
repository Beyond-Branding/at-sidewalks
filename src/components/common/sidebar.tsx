import { Variants } from "motion";
import { motion } from "motion/react";
import { useEffect } from "react";
import { CollapsibleLink } from "./collapsible-link";
import Link from "next/link";

export default function Sidebar({ isOpen, onClose }: any) {
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
        className="top-0 bottom-0 left-0 z-[1000] isolate fixed bg-primary px-8 pt-16 w-screen max-w-[540px]"
      >
        <div className="z-10 space-y-4">
          <CollapsibleLink />
          <div className="flex justify-between items-center pb-2 border-gray-200 border-b-[0.25px]">
            <Link href="/about" className="font-bold">
              about
            </Link>
          </div>
          <div className="flex justify-between items-center pb-2 border-gray-200 border-b-[0.25px]">
            <Link href="/contact" className="font-bold">
              contact
            </Link>
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
