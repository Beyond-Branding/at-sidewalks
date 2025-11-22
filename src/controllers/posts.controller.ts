import { Blog } from "@/constants/blogs";
import { wp } from "@/lib/wp-client";
import { getCategories } from "./categories.controller";
import axios from "axios";

export const getPosts = async (
  params = {
    per_page: 10,
  } as any
): Promise<Blog[]> => {
  const categories = await getCategories();
  let response = wp.posts();

  for (const key in params) {
    response = response.param(key, `${params[key]}`);
  }

  response = await response;

  return Promise.all(
    response.map(async (blog: any) => {
      const image = await wp.media().id(blog.featured_media);

      const blogCategories = [];

      for (const category of blog.categories) {
        const categoryName = categories.find((c) => c.id === category);
        if (categoryName) blogCategories.push(categoryName.name);
      }

      return {
        id: blog.id,
        title: blog.title.rendered,
        publishedAt: blog.date,
        author: blog.author,
        image: image?.source_url || "",
        description: blog.excerpt.rendered,
        categories: [],
      };
    })
  );
};

export const getStickyPosts = async (params = {}): Promise<Blog[]> => {
  const categories = await getCategories();
  const response = await wp.posts().param("sticky", "true");

  return Promise.all(
    response.map(async (blog: any) => {
      const image = await wp.media().id(blog.featured_media);

      const blogCategories = [];

      for (const category of blog.categories) {
        const categoryName = categories.find((c) => c.id === category);
        if (categoryName) blogCategories.push(categoryName.name);
      }

      return {
        id: blog.id,
        title: blog.title.rendered,
        publishedAt: blog.date,
        author: blog.author,
        image: image["source_url"],
        description: blog.excerpt.rendered,
        categories: blogCategories,
      };
    })
  );
};

export const getPost = async (id: number) => {
  const post = await wp.posts().id(id);

  return post;
};

export const searchPosts = async (params = {}) => {
  const response = await axios.get("/api/blogs", {
    params,
  });

  return response.data;
};
