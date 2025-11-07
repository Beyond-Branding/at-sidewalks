import { wp } from "@/lib/wp-client";

export const getMedia = async (id: number) => {
  const media = await wp.media().id(id);
  return media?.source_url || null;
};
