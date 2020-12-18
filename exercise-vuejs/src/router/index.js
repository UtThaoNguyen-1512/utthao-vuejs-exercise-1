import { createRouter, createWebHistory } from "vue-router"

import HomeTodo from "../views/HomeTodo.vue"
const routers = [
   // { path: "/", component: HomeTodo },
   { path: "/home", component: HomeTodo},
]
const router = createRouter({
   history: createWebHistory(),
   routes: routers,
})
export default router