import { AxiosInstance } from "axios";
import { SigninParams } from "../interfaces/account.interface";
import { UserResponse } from "../interfaces/user.interface";


export class AccountApi {
  axios: AxiosInstance;

  constructor(params: AxiosInstance) {
    this.axios = params;
  }


  signin= (params: SigninParams): Promise<UserResponse>=>{
    return this.axios.post('/account/signin', params)
  }

  signout = (): Promise<any> => {
    return this.axios.delete('/account/signout');
  };
}