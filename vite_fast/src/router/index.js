import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: "/first_step",
      name: "first_step",
      component: () => import('../views/FirstStepView.vue')
    },
    {
      path: "/first_step_answer",
      name: "first_step_answer",
      component: () => import('../views/FirstStepAnswerView.vue')
    },
    {
      path: "/second_step",
      name: "second_step",
      component: () => import('../views/SecondStepView.vue')
    },
    {
      path: "/second_step_answer",
      name: "second_step_answer",
      component: () => import('../views/SecondStepAnswerView.vue')
    },
    {
      path: "/third_step",
      name: "third_step",
      component: () => import('../views/ThirdStepView.vue')
    },
    {
      path: "/third_step_answer",
      name: "third_step_answer",
      component: () => import('../views/ThirdStepAnswerView.vue')
    }
  ]
})

export default router
