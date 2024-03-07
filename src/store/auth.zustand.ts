import create from "zustand";
import { persist, devtools, createJSONStorage } from "zustand/middleware";
import Cookies from "js-cookie";
import { AccountService } from "../services/account.service";

export interface AuthState {
  user: any;
  isLoading: boolean;
  error: any;
  isOpen: boolean;
  setIsOpen: () => any;
  login: any;
  register: any;
  loginGoogle: any;
}
export const getLocaleStorageAuth = () => {
  if (typeof window === "undefined" || typeof localStorage === "undefined") {
    return null;
  } else {
    const authData: any = localStorage.getItem("auth");
    const parsedAuthData = JSON.parse(authData);
    const user = parsedAuthData?.state?.user;

    return user;
  }
};
export const authZustand = create<AuthState>()(
  devtools(
    persist(
      (set, get) => ({
        user: getLocaleStorageAuth(),
        isLoading: false,
        error: null,
        isOpen: false,
        setIsOpen: () => set({ isOpen: !get().isOpen }),
        login: async (email: string, password: string) => {
          set({ isLoading: true });

          await AccountService.login(email, password)
            .then((res) => {
              console.log("zustand login successful");
              let user: any = {
                id: res.id,
                email: res.email,
              };

              Cookies.set("user", JSON.stringify(user.id, user.email));
              const expirationDate = new Date();
              expirationDate.setDate(expirationDate.getDate() + 14);

              Cookies.set("accessToken", res.accessToken, {
                path: "/",
                expires: expirationDate,
              });
              set({ isLoading: false, user: user, isOpen: false });
            })
            .catch((err) => {
              set({ isLoading: true });
              console.error(err);
            });
        },
        register: async (email: string, password: string, login: string) => {
          set({ isLoading: true });

          await AccountService.register(email, password, login);
        },
        loginGoogle: async () => {
          set({ isLoading: true, user: Cookies.get("user") });
        },
      }),
      {
        name: "auth",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);
