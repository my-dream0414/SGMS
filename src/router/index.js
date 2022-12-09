import Vue from "vue";
import VueRouter from "vue-router";
// import Home from '../views/Home.vue'
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
    meta: { title: "自述文件" },
    children: [
      {
        // 管理员模块路由
        path: "/admin",
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ "../components/admin/Main.vue"
          ),
        meta: { title: "管理员首页" },
        // children:[] 管理员下一级路由
      },
      {
        // 学生模块路由
        path: "/student",
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ "../components/student/Main.vue"
          ),
        meta: { title: "学生首页" },
        children: [],
      },
      {
        // 班主任模块路由
        path: "/teacher",
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ "../components/teacher/Main.vue"
          ),
        meta: { title: "班主任首页" },
        // children:[]  班主任下一级路由
      },
    ],
  },
  {
    path: "/login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
    meta: { title: "登录" },
  },
  {
    path: "/register",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Register.vue"),
    meta: { title: "注册" },
  },
  {
    path: "*",
    redirect: "/404",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
