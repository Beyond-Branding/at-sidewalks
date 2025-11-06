import WPAPI from "wpapi";

const wp = new WPAPI({
  endpoint: "http://admin.atsidewalks.com/wp-json",
});

export { wp };
