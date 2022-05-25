import cookie from 'js-cookie';

export const getCookie = (name: string) => {
  return cookie.get(name);
};

export const deleteCookie = (name: string) => {
  cookie.remove(name);
};
