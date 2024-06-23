import mongoose, { mongo } from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DB);
    console.log("Connected to the Database");
  } catch (error) {
    console.log("An error occured: ", error);
  }
};
