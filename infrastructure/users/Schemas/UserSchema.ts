import mongoose from "mongoose";
const { Schema } = mongoose;

const UserModel = new Schema(
  {
    id: {
      type: String,
    },
    username: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
    },
  },
  { timestamps: true }
);

const UserSchema = mongoose.model("User", UserModel);

export { UserSchema };
