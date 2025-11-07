import { wp } from "@/lib/wp-client";

export const getCommonData = async () => {
  const footer_about = await wp.pages().id(4854);
  const footer_contact = await wp.pages().id(4856);
  const footer_advertising = await wp.pages().id(4858);

  return {
    footer: {
      about: footer_about.content.rendered,
      contact: footer_contact.content.rendered,
      advertising: footer_advertising.content.rendered,
    },
  };
};

export const getAuthor = async (id: number) => {
  const author = await wp.users().id(id);

  return author;
};
