import mongoose from "mongoose";

const ConnectDB = (url) => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database Connected susscefully");
    })
    .catch((error) => {
      console.log("Database Connection Failed", error);
      process.exit(1);
    });
};

export default ConnectDB;
