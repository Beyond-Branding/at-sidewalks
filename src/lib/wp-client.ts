import WPAPI from "wpapi";

const wp = new WPAPI({
  endpoint: "https://admin.atsidewalks.com/wp-json",
});

export { wp };
