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
        path: "/teacher",
        component: () => import("../components/teacher/Main.vue"),
        meta: { title: "教师首页" },
        children: [
          {
            meta: { title: "学生成绩管理" },
            name: "grade",
            path: "/teacher/GradeManage",
            component: () => import("../components/teacher/GradeManage.vue"),
          },
          {
            meta: { title: "课程信息管理" },
            name: "source",
            path: "/teacher/SourceManage",
            component: () => import("../components/teacher/SourceManage.vue"),
          },
          {
            meta: { title: "学生信息管理" },
            name: "stuInfo",
            path: "/teacher/StuInfoManage",
            component: () => import("../components/teacher/StuInfoManage.vue"),
          },
        ],
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
