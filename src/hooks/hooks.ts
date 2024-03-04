import { AuthState, authZustand } from "../store/auth.zustand";

export const useAuth: any = () => authZustand((state: AuthState) => state);

export const getLocaleStorageAuth = () => {
  const authData = localStorage ? localStorage.getItem("auth") : "";
  const parsedAuthData = JSON.parse(authData);
  const user = JSON.parse(parsedAuthData?.state?.user) || null;

  return user;
};
