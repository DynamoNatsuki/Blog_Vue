import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Blog1View from '../views/Blog1View.vue';
import Blog2View from '../views/Blog2View.vue';
import Blog3View from '../views/Blog3View.vue';
import Blog4View from '../views/Blog4View.vue';
import Blog5View from '../views/Blog5View.vue';
import Blog6View from '../views/Blog6View.vue';
import Blog7View from '../views/Blog7View.vue';

const routes = [
  {
    path: '/blog2',
    name: 'blog2',
    component: Blog2View
  },

  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/blog4',
    name: 'blog4',
    component: Blog4View
  },
  {
    path: '/blog5',
    name: 'blog5',
    component: Blog5View   
  },
  {
    path: '/blog6',
    name: 'blog6',
    component: Blog6View
  },
    {
    path: '/blog7',
    name: 'blog7',
    component: Blog7View
  },
  {
    path: '/blog3',
    name: 'blog3',
    component: Blog3View
  },
  {
    path: '/blog1',
    name: 'blog1',
    component: Blog1View
  }  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
