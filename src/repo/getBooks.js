import axios from "axios";

export const getBooks = async () => {
  const res = await axios.get(
    "https://nervous-spicy-road.glitch.me/v1/yuta-ike/book"
  );
  return res.data;
};
