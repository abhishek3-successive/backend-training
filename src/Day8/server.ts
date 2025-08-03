import { connectDB } from "../config/db";
import app from "./app";

const PORT = 8000;

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();