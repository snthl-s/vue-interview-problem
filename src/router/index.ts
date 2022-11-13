import { createRouter, createWebHistory } from 'vue-router'
import PostView from '../components/PostView.vue';
import SearchPost from '../components/SearchPost.vue';
import Home from '../views/Home.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { 
      path: '/post/view/:id',
      name: 'Post',
      component: PostView,
      props: true,
    },
    { 
      path: '/search',
      name: 'PostSearch',
      component: SearchPost,
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
  ]
})

export default router
