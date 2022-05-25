import { useToast } from "@chakra-ui/react";
import { AxiosError } from "axios";
import { useEffect, useMemo, useState } from "react";
import { axios } from "../api/axios";
import { ErrorResponse } from "../interfaces/response.interface";
import { store } from "../stores/index.store"
import { deleteCookie } from "../utils/cookie.util";

export const useAxiosLoader =()=>{
  
  const [counter, setCounter]= useState(0);
  const {setLoading,removeUser} = store.application((state)=>state);
  const toast =useToast();


  const interceptors = useMemo(() => {
    const increment = () => setCounter(counter + 1);
    const decrement = () => setCounter(counter - 1);

    return {
      request: (config: any) => {
        increment();
        return config;
      },
      response: (response: any) => {
        decrement();
        return response;
      },
      error: (error: AxiosError<ErrorResponse>) => {
        decrement();

        if (error.response?.status === 401) {
          removeUser();
          deleteCookie('testing');
          window.location.href = '/';
          return Promise.reject(error);
        }

        let description = error.response?.data?.error?.message;

        if (error.response?.data?.error?.errors) {
          description = error.response?.data.error.errors.description;
        }

        toast({
          title: error.response?.data?.error?.code || 'Something went wrong',
          description,
          status: 'error',
          duration: 2000,
          isClosable: true,
        });

        return Promise.reject(error);
      },
    };
  }, []);

  const isLoading = counter > 0;

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);

  useEffect(() => {
    const requestsInterceptor = axios.interceptors.request.use(
      interceptors.request,
      interceptors.error
    );

    const responsesInterceptor = axios.interceptors.response.use(
      interceptors.response,
      interceptors.error
    );
    return () => {
      axios.interceptors.request.eject(requestsInterceptor);
      axios.interceptors.response.eject(responsesInterceptor);
    };
  }, [interceptors]);

  return [isLoading];
};


