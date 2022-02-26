import News from "./models/news.js";
import { data } from "./constants/data.js";

const DefaultData = async () => {
  try {
    await News.deleteMany({});
    await News.insertMany(data);
    console.log("Data uploaded to the db");
  } catch (err) {
    console.log(err);
  }
};

export default DefaultData;
