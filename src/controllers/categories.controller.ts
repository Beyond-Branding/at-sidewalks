import { wp } from "@/lib/wp-client";

export const getCategories = async () => {
  const categories: any[] = await wp.categories();

  return categories;
};

export const getCategory = async (id: number) => {
  const category = await wp.categories().id(id);

  return category;
};
