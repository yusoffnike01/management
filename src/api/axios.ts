import Axios, { AxiosError } from 'axios';
import { deleteCookie } from '../utils/cookie.util';
import { formatTime } from '../utils/dayjs.util';

const instance = Axios.create({
  baseURL: import.meta.env.VITE_BACKEND_API_BASE_URL,
});


instance.interceptors.request.use(
  (config)=>{
    const configShallowCopy = { ...config };
    configShallowCopy.withCredentials = true;

    return {
      ...configShallowCopy,
    };
  },
  (error: AxiosError<any>) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    if (response.status === 401) {
      deleteCookie('studentmanagement');
      window.location.href = '/signin';
    }

    if (response.data.data) {
      if (response.data.data.constructor === Object) {
        formatTime(response.data.data);
      }

      if (response.data.data.items && response.data.data.items === Array) {
        response.data.data.items.map((item: any) => formatTime(item));
      }
    }

    return response.data.data;
  },
  (error: AxiosError<any>) => {
    return Promise.reject(error);
  }
);

export const axios = instance;
