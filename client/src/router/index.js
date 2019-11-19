import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/pages/Home"
import Tasks from "@/pages/Tasks/index.vue"
import CreateTask from "@/pages/CreateTask/index.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/tasks',
      name: 'Tasks',
      component: Tasks,
    },
    {
      path: '/tasks/create',
      name: 'CreateTask',
      component: CreateTask
    }
  ]
});
