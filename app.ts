import express from "express";
import { UserRoute } from "./infrastructure/users/userRoute";
import mongoose from "mongoose";
import "dotenv/config";
const app = express();

app.use(express.json());
app.use("/user", UserRoute);

app.listen(process.env.PORT, async () => {
  await mongoose.connect(`${process.env.MONGO}`);

  console.log(
    `Server running on port ${process.env.PORT}, happy codding 🧨🧨🎈!!! \n`
  );
  console.log(`MongoDB running successfully 🍻🥂🥂!!!`);
});
