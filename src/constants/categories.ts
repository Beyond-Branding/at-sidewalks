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
    image: "/assets/categories/beauty.png",
    title: "Beauty",
  },
  {
    id: 120,
    href: "#",
    image: "/assets/categories/books.png",
    title: "Books",
  },
  {
    id: 236,
    href: "#",
    image: "/assets/categories/movies.png",
    title: "Movies & TV",
  },
  {
    id: 237,
    href: "#",
    image: "/assets/categories/glowup.png",
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
    image: "/assets/categories/fashion.png",
    title: "Fashion",
  },
  {
    id: 153,
    href: "#",
    image: "/assets/categories/travel.png",
    title: "Travel",
  },
  {
    id: 239,
    href: "#",
    image: "/assets/categories/life.png",
    title: "Life",
  },
] as Category[];
