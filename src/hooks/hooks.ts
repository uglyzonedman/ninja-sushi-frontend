import { AuthState, authZustand } from "../store/auth.zustand";

export const useAuth: any = () => authZustand((state: AuthState) => state);

export const getLocaleStorageAuth = () => {
  const authData = window && localStorage ? localStorage.getItem("auth") : "";
  const parsedAuthData = JSON.parse(authData);
  const user = parsedAuthData?.state?.user;

  return user;
};
