import axios from "axios";

const url = "http://localhost:8000";

export const getNews = async (page, size = 5) => {
  try {
    return await axios.get(`${url}/news?page=${page}&size=${size}`);
  } catch (err) {
    console.log(`Error while calling getNews API ${err}`);
  }
};
