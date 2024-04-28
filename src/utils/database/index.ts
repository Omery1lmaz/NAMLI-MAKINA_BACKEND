import mongoose from "mongoose";

const connectDB = async () => {
  // const connectionParams: mongoose.ConnectOptions = {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  // }; 
  try {
    await mongoose.connect(
      "mongodb+srv://namlimakinadatabase:6tVhSHxwEcqh9dXa@cluster0.bu9tqw4.mongodb.net/?retryWrites=true&w=majority",
    );
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);
  }
};

export default connectDB;