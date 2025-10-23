export interface Blog {
  title: string;
  publishedAt: string;
  author: string;
  image: string;
}

export const blogs = [
  {
    title: "Getting Over Girl Hate",
    publishedAt: "2024-09-14",
    author: "Yachana",
    image: "/assets/blogs/getting_over_girl_hate.webp",
  },
  {
    title: "How to Feel Like A Princess",
    publishedAt: "2024-07-03",
    author: "Yachana",
    image: "/assets/blogs/how_to_feel_like_a_princess.webp",
  },
  {
    title: "People Are Sharing The Best Things They Learned in Therapy",
    publishedAt: "2024-09-02",
    author: "Yachana",
    image: "/assets/blogs/people_are_sharing_the_best_things.webp",
  },
  {
    title: "A Day at The Dolce & Gabbana Exhibit",
    publishedAt: "2024-10-07",
    author: "Yachana",
    image: "/assets/blogs/a_day_at_the_dolce_and_gabbana_exhibit.webp",
  },
  {
    title: "The Person You End Up With Might Not Be Your Soulmate",
    publishedAt: "2024-02-14",
    author: "Yachana",
    image:
      "/assets/blogs/the_person_you_end_up_with_might_not_be_your_soulmate.webp",
  },
  {
    title: "Find Out What's Really on Your Mind",
    publishedAt: "2024-02-19",
    author: "Yachana",
    image: "/assets/blogs/find_out_whats_really_on_your_mind.webp",
  },
  {
    title: "Our Beachy Escape to El Nido",
    publishedAt: "2024-04-18",
    author: "Yachana",
    image: "/assets/blogs/our_beachy_escape_to_el_nido.webp",
  },
] as Blog[];
