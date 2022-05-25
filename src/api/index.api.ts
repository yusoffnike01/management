
import { AccountApi } from "./account.api";
import { axios } from "./axios";

export const api ={
  account : new AccountApi(axios)
}