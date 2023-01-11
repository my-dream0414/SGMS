import Vue from "vue";
import VueRouter from "vue-router";
// import Home from '../views/Home.vue'
Vue.use(VueRouter);

// 获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
// 修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

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
        children: [
          {
            path: "/selfinfo",
            component: () =>
              import(
                /* webpackChunkName: "dashboard" */ "../components/student/Selfinfo.vue"
              ),
              meta: { title: "个人信息" },
          },
          {
            path: "/Grade",
            component: () =>
              import(
                /* webpackChunkName: "dashboard" */ "../components/student/Grade.vue"
              ),
              meta: { title: "成绩概览" },
          },
          {
            path: "/Correct",
            component: () =>
              import(
                /* webpackChunkName: "dashboard" */ "../components/student/Correct.vue"
              ),
              meta: { title: "信息修改" },
          },
          {
            path: "/ScoreAn",
            component: () =>
              import(
                /* webpackChunkName: "dashboard" */ "../components/student/ScoreAn.vue"
              ),
              meta: { title: "成绩分析" },
          }

          
        ],
      },
      {
        path: "/teacher",
        component: () => import("../components/teacher/Main.vue"),
        meta: { title: "教师首页" },
        children: [
          {
            meta: { title: "教师首页" },
            name: "teacher",
            path: "/teacher",
            component: () => import("../components/teacher/Home.vue"),
          },
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

// 全局前置路由守卫---初始化的时候被调用、每次路由切换的时候被调用
// router.beforeEach((to, from, next) => {
//   console.log(to);
//   //这里是一个简单的例子
//   //即判断用户是否进入了需要鉴权的路由下（这里距离为news和message）
//   if (to.path == "/admin" || to.path === "/teacher" || to.path === "/student") {
//     //如果进入了，那就判断本地是否缓存了信息（这里模拟登录的token)
//     console.log(localStorage);
//     if (localStorage.getItem("name") === "student") {
//       next();
//     } else {
//       console.log("回到登录页面");
//       next({ path: "/login " });
//       // next()
//     }
//   } else {
//     next();
//   }
// })



export default router;
