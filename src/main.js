import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import axios from "axios";
import moment from "moment";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
axios.defaults.withCredentials = true;
Vue.prototype.$store = store;
Vue.prototype.moment = moment;
new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
    /**
     * This is to set token to any request to server side.
     * @returns Resquest with configurations
     */
     created () {
        const userInfo = localStorage.getItem('user')
        if (userInfo) {
          const userData = JSON.parse(userInfo)
          this.$store.commit('setUserData', userData)
        }
        axios.interceptors.response.use(
          response => response,
          error => {
            if (error.response.status === 401) {
              this.$store.dispatch('logout')
            }
            return Promise.reject(error)
          }
        )
      },
}).$mount("#app");
