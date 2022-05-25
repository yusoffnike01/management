import { UserResponse } from "./user.interface";

export interface SigninParams {
  email: string;
  password: string
}

export interface SigninResponse extends UserResponse {}