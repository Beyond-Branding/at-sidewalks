import type { NextApiRequest, NextApiResponse } from "next";
import { getPosts } from "@/controllers/posts.controller";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const page = Number(req.query.page || 1);
    const per_page = Number(req.query.per_page || 12);

    const posts = await getPosts({ page, per_page });
    res.status(200).json(posts ?? []);
  } catch (error) {
    console.error("Posts API error:", error);
    res.status(500).json([]);
  }
}
