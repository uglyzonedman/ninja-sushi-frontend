import { $apiWithToken, $apiWithoutToken } from "@/src/api/api";
export const AccountService = {
  async login(email: string, password: string) {
    const res = await $apiWithoutToken.post("account/login", {
      email: email,
      password: password,
    });

    return res.data;
  },

  async register(email: string, password: string, login: string) {
    const res = await $apiWithoutToken.post("account/create-account", {
      email: email,
      password: password,
      login: login,
    });

    return res.data;
  },

  async loginGoogle() {
    const res = await $apiWithoutToken.get("account/auth/google/callback");
    return res.data;
  },

  async getProfile() {
    const res = await $apiWithToken.get("account/get-profile");
    return res.data;
  },
};
