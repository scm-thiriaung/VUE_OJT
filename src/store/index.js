import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

axios.defaults.baseURL = 'http://localhost:8000/api'

export default new Vuex.Store({
    state: {
        user: null,
    },
    mutations: {
        setUserData(state, userData) {
            if(userData != null){
                state.user = userData
                localStorage.setItem('user', JSON.stringify(userData))
                axios.defaults.headers.common.Authorization = `Bearer ${userData.token}`
            }
            else {
                state.user = userData
                localStorage.removeItem('user',null)
            }
        }
    },
    actions: {
        login ({ commit }, credentials) {
            return axios.get('/sanctum/csrf-cookie').then(() => {
              axios.post('/login', credentials)
              .then(({ data }) => {
                console.log(data)
                commit('setUserData', data)
              })
            })
          },
        logout ({ commit }, credentials) {
            return axios.post("/logout", credentials).then(() => {
                commit('setUserData', null);
              });
        }
    },
    getters: {
        isLoggedIn: (state) => !!state.user,
        userId: (state) => {
            if (state.user && state.user.user.id) {
                return state.user.user.id;
            }
        },
        user(state) {
            console.log(state.user);
            return state.user;
        },
    },
    plugins: [createPersistedState()],
});
