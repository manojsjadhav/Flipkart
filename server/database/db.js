import mongoose from "mongoose";


const connection = async () => {
  const URL = "mongodb://localhost:27017/manojDB";

  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("database connected succesfully");
  } catch (error) {
    console.log("Error:", error);
  }
};

export default connection;
