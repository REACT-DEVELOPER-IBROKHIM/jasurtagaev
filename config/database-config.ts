import mongoose from "mongoose";

const MONGODB_CONNECTION_URI: string = process.env
  .MONGODB_CONNECTION_URI as string;

export async function connectToDatabase() {
  try {
    mongoose.connect(MONGODB_CONNECTION_URI);

    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MONGODB CLUSTER CONNECTION ESTABLISHED");
    });

    connection.on("error", (error) => {
      console.log("MONGODB CLUSTER CONNECTION ERROR:", error);
      process.exit();
    });
  } catch (error) {
    console.log(error);
  }
}
