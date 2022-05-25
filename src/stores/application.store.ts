import create from "zustand";
import { persist } from 'zustand/middleware';
import { SigninResponse } from "../interfaces/account.interface";
import { ErrorResponse } from "../interfaces/response.interface";

interface AppState{
  isLoggedIn: boolean;
  isLoading: boolean;
  user: SigninResponse;
  error: ErrorResponse;
  setUser: (params: SigninResponse) => void;
  setLoading: (params: boolean)=>void;
  setError: (params: ErrorResponse)=>void
  removeUser: () => void;
}
export const  applicationStore =create<AppState>(persist(
(set)=>({
  isLoggedIn: false as boolean,
  isLoading: false as boolean,
  user: {} as SigninResponse,
  error: {} as ErrorResponse,
  setUser: (params: SigninResponse) =>
  set({
    isLoggedIn: true,
    user: params,
  }),
  setLoading: (params: boolean) =>
  set({
    isLoading: params,
  }),
  setError: (params: ErrorResponse) =>
  set({
    error: params,
  }),
  removeUser: () =>
        set({
          user: {} as SigninResponse,
          isLoggedIn: false,
        }),
}),
{
  name: 'application',
}
));