import mongoose from "mongoose";

const Connection = async (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
  });
};

export default Connection;
