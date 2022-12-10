import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import store from '../store'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    meta: { title: '自述文件' },
    children: [
      {
        // 管理员模块路由
        path: '/admin',
        // name:"admin",
        component: () => import(/* webpackChunkName: "dashboard" */ '../components/admin/Main.vue'),
        meta: {
          title: '管理员首页',
          requireAuth: true

        }
        // children:[] 管理员下一级路由
      },
      {
        // 学生模块路由
        path: '/student',
        // name: "student",
        component: () => import(/* webpackChunkName: "dashboard" */ '../components/student/Main.vue'),
        meta: {
          title: '学生首页',
          requireAuth: true
        },
        children: [
          {
            // 班主任模块路由
            path: '/correct',
            // name:"correct",
            component: () => import(/* webpackChunkName: "dashboard" */ '../components/student/Correct.vue'),
            meta: { title: '学生首页' }
            // children:[]  班主任下一级路由
          },
        ] //学生下一级路由
      },
      {
        // 班主任模块路由
        path: '/teach',
        // name:"teach",
        component: () => import(/* webpackChunkName: "dashboard" */ '../components/headteacher/Main.vue'),
        meta: {
          title: '班主任首页',
          requireAuth: true
        }
        // children:[]  班主任下一级路由
      },
      {
        // 任课老师模块路由
        path: '/head',
        // name:"head",
        component: () => import(/* webpackChunkName: "dashboard" */ '../components/teacher/Main.vue'),
        meta: {
          title: '任课老师首页',
          requireAuth: true
        }
        // children:[] 任课老师下一级路由
      }
    ]
  },
  {
    path: '/login',
    // name: "login",
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta: { title: '登录' }
  },
  {
    path: '/register',
    // name:"rigister",
    component: () => import(/* webpackChunkName: "login" */ '../views/Register.vue'),
    meta: {
      title: '注册',
      requireAuth: true
    }
  },
  {
    path: '*',
    redirect: '/404'
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 全局前置路由守卫---初始化的时候被调用、每次路由切换的时候被调用
router.beforeEach((to, from, next) => {
  console.log(to);
  //这里是一个简单的例子
  //即判断用户是否进入了需要鉴权的路由下（这里距离为news和message）
  if (to.path == '/admin' || to.path === '/teach' || to.path === '/student') {
    //如果进入了，那就判断本地是否缓存了信息（这里模拟登录的token)
    console.log(localStorage)
    if (localStorage.getItem('name') === 'student') {
      next()
    }
    else{
      console.log("回到登录页面")
      next({ path : " \login " })
      // next()
    }
  }else{
    next()
  }
})


export default router
