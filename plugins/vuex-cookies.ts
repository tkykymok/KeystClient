import { Context } from "@nuxt/types";
import createPersistedState from "vuex-persistedstate";
import Cookies from "js-cookie"
export default ({ store }: Context) => {
  createPersistedState({
    paths: [
      "authentication._jwt",
      "authentication._loginUserInfo",
    ],
    storage: {
      getItem: key => Cookies.get(key),
      setItem: (key, value) => Cookies.set(key, value, { expires: 3, secure: true }),
      removeItem: key => Cookies.remove(key)
    }
  })(store)
}
