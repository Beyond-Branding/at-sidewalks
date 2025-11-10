import { wp } from "@/lib/wp-client";

export const getPage = async (params = {} as any) => {
  let response = wp.pages();

  for (const key in params) {
    response = response.param(key, params[key] as string);
  }
  response = await response.get();

  return response.at(0);
};
