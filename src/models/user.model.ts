import mongoose from "mongoose";
import { IUser, UserRoleType } from "../types";

const UserSchema = new mongoose.Schema<IUser>(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phonenumber: { type: String, unique: true },
    password: { type: String, required: true },
    profilePhoto: { type: String, default: null },
    role: {
      type: String,
      enum: Object.values(UserRoleType),
      default: UserRoleType.employee,
    },
    storeId: { type: mongoose.Schema.Types.ObjectId, ref: "Store" },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model<IUser>("User", UserSchema);
