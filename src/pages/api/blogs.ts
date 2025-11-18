import { wp } from "@/lib/wp-client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    /* Return all blogs */
    const search = req.query.search as string;
    let blogs = [];
    if (search) {
      /* Return the blogs */
      blogs = await wp.posts().search(search);
    } else {
      /* Return the blogs */
      blogs = await wp.posts().list();
    }

    for (const blog of blogs) {
      const image = await wp.media().id(blog.featured_media);
      blog.image = image?.source_url;
    }

    return res.status(200).json({ blogs });
  }

  /* Default sent error for invalid method */
  return res.status(405).json({ error: "Method not allowed" });
}
