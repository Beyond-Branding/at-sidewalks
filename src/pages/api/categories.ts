import type { NextApiRequest, NextApiResponse } from "next";
import WPAPI from "wpapi";

const wp = new WPAPI({
  endpoint: "https://admin.atsidewalks.com/wp-json",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const categories = await wp.categories().perPage(100);
    res.status(200).json(categories);
  } catch (error) {
    console.error("Categories API error:", error);
    res.status(500).json([]);
  }
}
