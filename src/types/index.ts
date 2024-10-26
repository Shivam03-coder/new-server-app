import mongoose, { Document } from "mongoose";

export interface IUser extends Document {
  _id: mongoose.Types.ObjectId;
  storeId: mongoose.Types.ObjectId;
  firstname: string;
  lastname: string;
  phonenumber?: string;
  email: string;
  password: string;
  role?: UserRoleType;
  profilePhoto?: string;
}

export enum UserRoleType {
  admin = "Admin",
  employee = "employee",
}

export interface IUsersPayload extends Document {
  _id: mongoose.Types.ObjectId;
  email: string;
}

export interface Itoken extends Document {
  userId: mongoose.Types.ObjectId;
  refreshToken: string;
  createdAt: Date;
  checkToken(oldrefreshtoken: string): boolean;
}

export type TokenType = {
  newaccessToken: string | undefined;
  newrefreshToken: string | undefined;
};
