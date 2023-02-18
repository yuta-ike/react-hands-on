import axios from "axios";

export const updateBookStatus = async (bookId, status) => {
  await axios.put(
    `https://nervous-spicy-road.glitch.me/v1/yuta-ike/book/${bookId}/status`,
    {
      status,
    }
  );
};
