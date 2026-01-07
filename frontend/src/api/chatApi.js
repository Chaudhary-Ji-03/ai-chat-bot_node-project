import axios from "./axios";

export const sendMessage = async (message, token) => {
  try {
    const res = await axios.post(
      "/chat",
      { message },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return res.data;
  } catch (error) {
    console.error(error);
    return { error: "Something went wrong" };
  }
};
