export interface Category {
  id: number;
  href: string;
  image: string;
  title: string;
}

export const categories = [
  {
    id: 124,
    href: "#",
    image: "/assets/categories/beauty.svg",
    title: "Beauty",
  },
  {
    id: 120,
    href: "#",
    image: "/assets/categories/books.svg",
    title: "Books",
  },
  {
    id: 236,
    href: "#",
    image: "/assets/categories/movies.svg",
    title: "Movies & TV",
  },
  {
    id: 237,
    href: "#",
    image: "/assets/categories/glowup&skincare.svg",
    title: "Glow Up & Skin Care",
  },
  {
    id: 29,
    href: "#",
    image: "/assets/categories/dating.png",
    title: "Dating & Relationships",
  },
  {
    id: 142,
    href: "#",
    image: "/assets/categories/fashion.svg",
    title: "Fashion",
  },
  {
    id: 153,
    href: "#",
    image: "/assets/categories/travel.svg",
    title: "Travel",
  },
  {
    id: 239,
    href: "#",
    image: "/assets/categories/life.svg",
    title: "Life",
  },
] as Category[];
