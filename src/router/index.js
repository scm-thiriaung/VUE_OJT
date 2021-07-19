import Vue from "vue";
import VueRouter from "vue-router";

import Login from "../pages/user/Login";
import UserList from "../pages/user/UserList";
import UserCreate from "../pages/user/UserCreate";
import UserEdit from "../pages/user/UserEdit";

import PostList from "../pages/post/PostList";
import PostCreate from "../pages/post/PostCreate";
import PostEdit from "../pages/post/PostEdit";
import PostUpload from "../pages/post/PostUpload";

Vue.use(VueRouter);

const routes = [
    {
        path: "/login",
        name: "login",
        component: Login,
    },
    {
        path: "/post/list",
        name: "post-list",
        component: PostList,
    },
    {
        path: "/*",
        redirect: "/post/list",
    },
    {
        path: "/post/create",
        name: "post-create",
        component: PostCreate,
    },
    {
        path: "/post/edit",
        name: "post-edit",
        component: PostEdit,
    },
    {
        path: "/post/upload",
        name: "post-upload",
        component: PostUpload,
    },
    {
        path: "/user/list",
        name: "user-list",
        component: UserList,
    },
    {
        path: "/user/create",
        name: "user-create",
        component: UserCreate,
    },
    {
        path: "/user/edit",
        name: "user-edit",
        component: UserEdit,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

/**
 * This is to handle and check authentication for routing.
 */
 router.beforeEach((to, from, next) => {
    const loggedIn = localStorage.getItem('user')
  
    if (to.matched.some(record => record.meta.auth) && !loggedIn) {
      next('/login')
      return
    }
    next()
  })
export default router;
