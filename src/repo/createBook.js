import axios from "axios";

export const createBook = async (title, description) => {
  await axios.post("https://nervous-spicy-road.glitch.me/v1/yuta-ike/book", {
    title,
    description,
  });
};
